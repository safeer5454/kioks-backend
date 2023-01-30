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
import { IngredientsService } from "./ingredients.service";
import { CreateIngredientDto } from "./dto/create-ingredient.dto";
import { UpdateIngredientDto } from "./dto/update-ingredient.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";

@Controller("ingredients")
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor("image", {
      storage: diskStorage({
        destination: "./files",
        filename(req, file, callback) {
          const formatedName = `${file.originalname}-ingredient`;
          callback(null, formatedName);
        },
      }),
    })
  )
  create(
    @UploadedFile() image: Express.Multer.File,
    @Body() createIngredientDto: CreateIngredientDto
  ) {
    return this.ingredientsService.create(image.filename, createIngredientDto);
  }

  @Get()
  findAll() {
    return this.ingredientsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ingredientsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateIngredientDto: UpdateIngredientDto
  ) {
    return this.ingredientsService.update(+id, updateIngredientDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ingredientsService.remove(+id);
  }
}
