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
import { ItemService } from "./item.service";
import { CreateItemDto } from "./dto/create-item.dto";
import { UpdateItemDto } from "./dto/update-item.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller("item")
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./files",
        filename(req, file, callback) {
          const formatedName = `${file.originalname}-item`;
          callback(null, formatedName);
        },
      }),
    })
  )
  create(
    @UploadedFile() image: Express.Multer.File,
    @Body() createItemDto: CreateItemDto
  ) {
    console.log(image);
    return this.itemService.create(image.filename, createItemDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.itemService.findOne(id);
  }

  // @Patch(":id")
  // @UseInterceptors(
  //   FileInterceptor("image", {
  //     storage: diskStorage({
  //       destination: "./files",
  //       filename(req, file, callback) {
  //         const formatedName = `${file.originalname}-item`;
  //         callback(null, formatedName);
  //       },
  //     }),
  //   })
  // )
  // update(
  //   @Param("id") id: string,
  //   @UploadedFile() image: Express.Multer.File,
  //   @Body() updateItemDto: UpdateItemDto
  // ) {
  //   return this.itemService.update(id, image?.filename, updateItemDto);
  // }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.itemService.remove(+id);
  }
}
