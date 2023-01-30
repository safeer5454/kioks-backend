import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSideDto } from "./dto/create-side.dto";
import { UpdateSideDto } from "./dto/update-side.dto";
import { Side } from "./entities/side.entity";

@Injectable()
export class SidesService {
  constructor(
    @InjectRepository(Side)
    private sideRepo: Repository<Side>
  ) {}
  async create(createSideDto: CreateSideDto) {
    try {
      const side = this.sideRepo.create(createSideDto);
      console.log(side);

      return await this.sideRepo.save(side);
    } catch (error) {
      return error;
    }
    return "side";
  }

  findAll() {
    return `This action returns all sides`;
  }

  findOne(id: number) {
    return `This action returns a #${id} side`;
  }

  update(id: number, updateSideDto: UpdateSideDto) {
    return `This action updates a #${id} side`;
  }

  remove(id: number) {
    return `This action removes a #${id} side`;
  }
}
