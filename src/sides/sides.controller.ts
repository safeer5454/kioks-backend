import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SidesService } from "./sides.service";
import { CreateSideDto } from "./dto/create-side.dto";
import { UpdateSideDto } from "./dto/update-side.dto";

@Controller("sides")
export class SidesController {
  constructor(private readonly sidesService: SidesService) {}

  @Post()
  create(@Body() createSideDto: CreateSideDto) {
    return this.sidesService.create(createSideDto);
  }

  @Get()
  findAll() {
    return this.sidesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.sidesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSideDto: UpdateSideDto) {
    return this.sidesService.update(+id, updateSideDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.sidesService.remove(+id);
  }
}
