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
    createItemDto.extras = JSON.parse(createItemDto.extras as string);
    createItemDto.ingredients = JSON.parse(createItemDto.ingredients as string);
    createItemDto.side = JSON.parse(createItemDto.side as string);
    createItemDto.size = JSON.parse(createItemDto.size as unknown as string);
    console.log(createItemDto);
    const item = this.itemRepo.create({
      name: createItemDto.name,
      category: createItemDto.category,
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
    const items = await this.itemRepo.find();
    // return await
  }

  async findOne(id: string) {
    const item = await this.itemRepo.findOne({
      where: { id },
      relations: ["category"],
    });
    return item;
  }

  async update(id: string, image, updateItemDto: UpdateItemDto) {
    console.log("updateItemDto", updateItemDto);
    if (
      image &&
      updateItemDto.side &&
      updateItemDto.extras &&
      updateItemDto.ingredients &&
      updateItemDto.size
    ) {
      updateItemDto.image = image;
    }
    updateItemDto.extras = JSON.parse(updateItemDto.extras as string);
    updateItemDto.ingredients = JSON.parse(updateItemDto.ingredients as string);
    updateItemDto.side = JSON.parse(updateItemDto.side as string);
    updateItemDto.size = JSON.parse(updateItemDto.size as unknown as string);
    const existingItem = await this.itemRepo.findOne({ where: { id } });
    const item = await this.itemRepo.merge(existingItem, updateItemDto as Item);
    try {
      const newItem = await this.itemRepo.create(item);
      const updatedItem = await this.itemRepo.save(newItem);
      return updatedItem;
    } catch (error) {
      throw new UnprocessableEntityException({
        status: HttpStatus.UNPROCESSABLE_ENTITY,
        error: JSON.stringify(error),
      });
    }
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
