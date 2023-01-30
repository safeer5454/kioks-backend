import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PACKAGE_TYPE } from "src/common/enums";
import { Repository } from "typeorm";
import { CreateMembershipDto } from "./dto/create-membership.dto";
import { UpdateMembershipDto } from "./dto/update-membership.dto";
import { Membership } from "./entities/membership.entity";

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(Membership)
    private membershipRepo: Repository<Membership>
  ) {}
  async create(createMembershipDto: CreateMembershipDto) {
    console.log(createMembershipDto);
    try {
      const membership = await this.membershipRepo.create(createMembershipDto);
      return await this.membershipRepo.save(membership);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async findAll() {
    return await this.membershipRepo.find();
  }

  async findOne(id: string) {
    const membership = await this.membershipRepo.findOne({ where: { id } });
    return membership;
  }

  update(id: number, updateMembershipDto: UpdateMembershipDto) {
    return `This action updates a #${id} membership`;
  }

  remove(id: number) {
    return `This action removes a #${id} membership`;
  }
}
