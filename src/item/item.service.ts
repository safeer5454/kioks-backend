import {
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Extra } from "src/extras/entities/extra.entity";
import { Ingredient } from "src/ingredients/entities/ingredient.entity";
import { Side } from "src/sides/entities/side.entity";
import { Repository } from "typeorm";
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";
import { Item } from "./entities/item.entity";

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepo: Repository<Item>
  ) {}
  async create(image, createItemDto: CreateItemDto) {
    createItemDto.image = image;
    // createItemDto.extras = JSON.parse(createItemDto.extras as string);
    // createItemDto.ingredients = JSON.parse(createItemDto.ingredients as string);
    // createItemDto.side = JSON.parse(createItemDto.side as string);
    const item = this.itemRepo.create({
      name: createItemDto.name,
      category: createItemDto.category,
      price: createItemDto.price,
      image: createItemDto.image,
      mostSelling: createItemDto.mostSelling,
      size: createItemDto.size,
      status: createItemDto.status,
      extras: createItemDto.extras as Extra[],
      ingredients: createItemDto.ingredients as Ingredient[],
      sides: createItemDto.side as Side[],
    });

    // return "item";
    return await this.itemRepo.save(item);
  }

  async findAll() {
    return await this.itemRepo.find();
  }

  async findOne(id: string) {
    const item = await this.itemRepo.findOne({
      where: { id },
      relations: ["category"],
    });
    return item;
  }

  // async update(id: string, image, updateItemDto: UpdateItemDto) {
  //   console.log("updateItemDto", updateItemDto);
  //   if (image) {
  //     updateItemDto.image = image;
  //   }
  //   const existingItem = await this.itemRepo.findOne({ where: { id } });
  //   const item = await this.itemRepo.merge(existingItem, updateItemDto);
  //   try {
  //     const newItem = await this.itemRepo.create(item);
  //     const updatedItem = await this.itemRepo.save(newItem);
  //     return updatedItem;
  //   } catch (error) {
  //     throw new UnprocessableEntityException({
  //       status: HttpStatus.UNPROCESSABLE_ENTITY,
  //       error: JSON.stringify(error),
  //     });
  //   }
  // }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
