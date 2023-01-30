import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateIngredientDto } from "./dto/create-ingredient.dto";
import { UpdateIngredientDto } from "./dto/update-ingredient.dto";
import { Ingredient } from "./entities/ingredient.entity";

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepo: Repository<Ingredient>
  ) {}
  async create(image, createIngredientDto: CreateIngredientDto) {
    createIngredientDto.image = image;
    const ingredient = this.ingredientRepo.create(createIngredientDto);
    return await this.ingredientRepo.save(ingredient);
  }

  async findAll() {
    const ingredients = await this.ingredientRepo.find();
    return ingredients;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
