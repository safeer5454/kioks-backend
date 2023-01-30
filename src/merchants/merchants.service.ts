import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BranchService } from "src/branch/branch.service";
import { CreateBranchDto } from "src/branch/dto/create-branch.dto";
import { MembershipService } from "src/membership/membership.service";
import { createQueryBuilder, DataSource, Repository } from "typeorm";
import { CreateMerchantDto } from "./dto/create-merchant.dto";
import { UpdateMerchantDto } from "./dto/update-merchant.dto";
import { Merchant } from "./entities/merchant.entity";
import { Branch } from "../branch/entities/branch.entity";

@Injectable()
export class MerchantsService {
  constructor(
    @InjectRepository(Merchant)
    private merchantRepo: Repository<Merchant>,
    private membershipService: MembershipService,
    private branchService: BranchService,
    private dataSource: DataSource
  ) {}
  async create(createMerchantDto: CreateMerchantDto) {
    console.log(createMerchantDto);
    //Creating Merchant
    try {
      const merchant = this.merchantRepo.create(createMerchantDto);
      console.log("merchant object", merchant);
      const recordedMerchant = await this.merchantRepo.save(merchant);
      console.log("merchant.id", merchant.id);
      if (createMerchantDto.membership) {
        const membership = await this.membershipService.findOne(
          merchant.membership.id
        );
        for (let branch = 1; branch <= membership.numberOfBranches; branch++) {
          console.log("branch=>", branch);

          await this.branchService.create({
            branchName: `${merchant.cafeName}-branch${branch}`,
            merchant: recordedMerchant,
            // merchant: { id: recordedMerchant.id },
          });
        }
        return recordedMerchant;
      }
    } catch (error) {
      return error;
    }

    // return "reached successfully";
    // return await this.merchantRepo.save(merchant);
  }

  async findAll() {
    return await this.merchantRepo.find();
  }

  async findOne(id: string) {
    const merchant = await this.merchantRepo.findOne({
      where: { id },
      relations: { branch: { kiosks: true } },
    });
    // const merchantRecord = await this.dataSource
    //   .createQueryBuilder()
    //   .select("merchant")
    //   .from(Merchant, "merchant")
    //   .where("merchant.id =:id", { id: id });
    // const merchantRecord = await this.merchantRepo
    //   .createQueryBuilder("merchant")
    //   // .leftJoinAndSelect("branch", "branch", "branch.merchantId = :mId", {
    //   //   //study about leftJoinAndMapMany vs LeftJoinSelect
    //   //   mId: id,
    //   // })
    //   .select("branch.*,merchant.id") //works
    //   .leftJoinAndMapOne(
    //     "merchant.id",
    //     "branch",
    //     "branch",
    //     "branch.merchantId = :mId",
    //     {
    //       //study about leftJoinAndMapMany vs LeftJoinSelect
    //       mId: id,
    //     }
    //   )
    //   .leftJoinAndMapOne(
    //     "branch.id",
    //     "kiosk",
    //     "kiosk",
    //     "kiosk.branchId = branch.id"
    //   )
    //   // .select("branch.branchName as brName") //works
    //   .where("merchant.id =:merchantId", { merchantId: id })
    //   .groupBy("branch.id")
    //   // .select("branch.branch_merchantId")
    //   .getRawMany();
    // // .getRawOne();
    // console.log(merchantRecord);
    return merchant;
  }

  update(id: number, updateMerchantDto: UpdateMerchantDto) {
    return `This action updates a #${id} merchant`;
  }

  async getMerchantKitchenRecord(id: string) {
    const merchantKitchenRecord = await this.merchantRepo.findOne({
      where: { id },
      relations: { extras: true, ingredient: true },
      select: { id: true, ownerName: true },
    });
    return merchantKitchenRecord;
  }

  async remove(id: string) {
    try {
      const merchant = await this.merchantRepo.delete({
        id,
      });
      return "deleted";
    } catch (error) {
      console.log(error);
      return "record deleted";
    }
  }
}
