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
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { DealsService } from "./deals.service";
import { CreateDealDto } from "./dto/create-deal.dto";
import { UpdateDealDto } from "./dto/update-deal.dto";

@Controller("deals")
export class DealsController {
  constructor(private readonly dealsService: DealsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./files",
        filename(req, file, callback) {
          const formatedName = `${file.originalname}-deal`;
          callback(null, formatedName);
        },
      }),
    })
  )
  create(
    @UploadedFile() image: Express.Multer.File,
    @Body() createDealDto: CreateDealDto
  ) {
    return this.dealsService.create(image?.filename, createDealDto);
  }

  @Get()
  findAll() {
    return this.dealsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.dealsService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDealDto: UpdateDealDto) {
    return this.dealsService.update(+id, updateDealDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.dealsService.remove(+id);
  }
}
