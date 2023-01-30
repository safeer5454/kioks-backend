import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "src/item/entities/item.entity";
import { Repository } from "typeorm";
import { CreateDealDto } from "./dto/create-deal.dto";
import { UpdateDealDto } from "./dto/update-deal.dto";
import { Deal } from "./entities/deal.entity";

@Injectable()
export class DealsService {
  constructor(
    @InjectRepository(Deal)
    private dealRepo: Repository<Deal>
  ) {}
  async create(image, createDealDto: CreateDealDto) {
    createDealDto.image = image;
    //Parsing the items array
    createDealDto.items = JSON.parse(createDealDto.items as string);
    const deal = this.dealRepo.create({
      image: createDealDto.image,
      name: createDealDto.name,
      price: createDealDto.price,
      kiosk: createDealDto.kiosk,
      items: createDealDto.items as Item[],
    });
    // return "save";
    return await this.dealRepo.save(deal);
  }

  async findAll() {
    const deals = await this.dealRepo.find();
    return deals;
  }

  async findOne(id: string) {
    const deal = await this.dealRepo.findOne({
      where: { id },
      relations: { items: true },
    });
    return deal;
  }

  update(id: number, updateDealDto: UpdateDealDto) {
    return `This action updates a #${id} deal`;
  }

  remove(id: number) {
    return `This action removes a #${id} deal`;
  }
}
