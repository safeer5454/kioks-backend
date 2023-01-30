import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateBranchDto } from "./dto/create-branch.dto";
import { UpdateBranchDto } from "./dto/update-branch.dto";
import { Branch } from "./entities/branch.entity";

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(Branch)
    private branchRepo: Repository<Branch>
  ) {}
  //defining a type so it can be used in others services
  // async create(data: {branchName:string;merchant:{id:string}})
  async create(createBranchDto: CreateBranchDto) {
    console.log("branch dto from branch service", createBranchDto);
    const branch = await this.branchRepo.create(createBranchDto);
    await this.branchRepo.save(branch);
    return "Branches created successfully";
  }

  findAll() {
    return `This action returns all branch`;
  }

  async find(merchantId: string) {
    const branch = await this.branchRepo.find({
      where: { merchant: { id: merchantId } },
    });
    return branch;
  }

  update(id: number, updateBranchDto: UpdateBranchDto) {
    return `This action updates a #${id} branch`;
  }

  remove(id: number) {
    return `This action removes a #${id} branch`;
  }
}
