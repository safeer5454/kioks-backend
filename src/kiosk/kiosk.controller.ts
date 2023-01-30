import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { KioskService } from "./kiosk.service";
import { CreateKioskDto } from "./dto/create-kiosk.dto";
import { UpdateKioskDto } from "./dto/update-kiosk.dto";

@Controller("kiosk")
export class KioskController {
  constructor(private readonly kioskService: KioskService) {}

  @Post()
  create(@Body() createKioskDto: CreateKioskDto) {
    return this.kioskService.create(createKioskDto);
  }

  @Get()
  findAll() {
    return this.kioskService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.kioskService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateKioskDto: UpdateKioskDto) {
    return this.kioskService.update(+id, updateKioskDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.kioskService.remove(+id);
  }
}
