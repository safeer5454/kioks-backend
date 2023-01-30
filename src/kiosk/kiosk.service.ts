import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateKioskDto } from "./dto/create-kiosk.dto";
import { UpdateKioskDto } from "./dto/update-kiosk.dto";
import { Kiosk } from "./entities/kiosk.entity";

@Injectable()
export class KioskService {
  constructor(
    @InjectRepository(Kiosk)
    private kioskRepo: Repository<Kiosk>
  ) {}
  async create(createKioskDto: CreateKioskDto) {
    const kiosk = this.kioskRepo.create(createKioskDto);

    return await this.kioskRepo.save(kiosk);
  }

  async findAll() {
    const kiosks = await this.kioskRepo.find();
    return kiosks;
  }

  async findOne(id: string) {
    const kiosk = await this.kioskRepo.findOne({
      where: { id },
      relations: {
        categories: { items: { category: true } },
        branch: true,
        side: { items: true },
        deal: { items: true },
      },
      // relations: ["branch", "categories",'items', "side", "deal"],
    });
    return kiosk;
  }

  update(id: number, updateKioskDto: UpdateKioskDto) {
    return `This action updates a #${id} kiosk`;
  }

  remove(id: number) {
    return `This action removes a #${id} kiosk`;
  }
}
