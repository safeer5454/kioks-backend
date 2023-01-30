import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { Category } from "./entities/category.entity";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    console.log(createCategoryDto);
    const category = this.categoryRepo.create(createCategoryDto);
    // const category = this.categoryRepo.create({
    //   name: "testing manually",
    //   image: "test from service",
    //   kiosk: [{ id: "58c694e0-9c49-4368-a4f2-fc32edc0bc49" }],
    // });

    return await this.categoryRepo.save(category);
    // return "saved";
  }

  async uploadImage(imageUri, createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepo.create({
      name: createCategoryDto.name,
      image: imageUri,
      kiosk: [{ id: `${createCategoryDto.kiosk}` }],
    });
    // const category = this.categoryRepo.create({
    //   name: "testing manually",
    //   image: "test from service",
    //   kiosk: [{ id: "58c694e0-9c49-4368-a4f2-fc32edc0bc49" }],
    // });

    return await this.categoryRepo.save(category);
    // return "upload";
  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
