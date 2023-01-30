import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { ExtrasService } from "./extras.service";
import { CreateExtraDto } from "./dto/create-extra.dto";
import { UpdateExtraDto } from "./dto/update-extra.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller("extras")
export class ExtrasController {
  constructor(private readonly extrasService: ExtrasService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./files",
        filename(req, file, callback) {
          const formatedName = `${file.originalname}-extra`;
          callback(null, formatedName);
        },
      }),
    })
  )
  create(
    @UploadedFile() image: Express.Multer.File,
    @Body() createExtraDto: CreateExtraDto
  ) {
    return this.extrasService.create(image.filename, createExtraDto);
  }

  @Get()
  findAll() {
    return this.extrasService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.extrasService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateExtraDto: UpdateExtraDto) {
    return this.extrasService.update(+id, updateExtraDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.extrasService.remove(+id);
  }
}
