import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BranchService } from "./branch.service";
import { CreateBranchDto } from "./dto/create-branch.dto";
import { UpdateBranchDto } from "./dto/update-branch.dto";

@Controller("branch")
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  @Post()
  create(@Body() createBranchDto: CreateBranchDto) {
    //Destructring the DTO to send data in type
    // const data = {
    //   branchName: createBranchDto.branchName,
    //   merchant: { id: createBranchDto.merchant },
    // };
    return this.branchService.create(createBranchDto);
  }

  @Get()
  findAll() {
    return this.branchService.findAll();
  }

  @Get(":merchantId")
  findOne(@Param("merchantId") merchantId: string) {
    return this.branchService.find(merchantId);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBranchDto: UpdateBranchDto) {
    return this.branchService.update(+id, updateBranchDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.branchService.remove(+id);
  }
}
