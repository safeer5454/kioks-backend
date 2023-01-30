import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateExtraDto } from "./dto/create-extra.dto";
import { UpdateExtraDto } from "./dto/update-extra.dto";
import { Extra } from "./entities/extra.entity";

@Injectable()
export class ExtrasService {
  constructor(
    @InjectRepository(Extra)
    private extraRepo: Repository<Extra>
  ) {}
  async create(image, createExtraDto: CreateExtraDto) {
    createExtraDto.image = image;
    const extra = this.extraRepo.create(createExtraDto);
    return await this.extraRepo.save(extra);
  }

  findAll() {
    return `This action returns all extras`;
  }

  async findOne(id: string) {
    return await this.extraRepo.findOne({
      where: { id },
      relations: { merchant: true },
    });
  }

  update(id: number, updateExtraDto: UpdateExtraDto) {
    return `This action updates a #${id} extra`;
  }

  remove(id: number) {
    return `This action removes a #${id} extra`;
  }
}
