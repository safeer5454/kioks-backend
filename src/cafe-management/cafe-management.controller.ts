import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CafeManagementService } from './cafe-management.service';
import { CreateCafeManagementDto } from './dto/create-cafe-management.dto';
import { UpdateCafeManagementDto } from './dto/update-cafe-management.dto';

@Controller('cafe-management')
export class CafeManagementController {
  constructor(private readonly cafeManagementService: CafeManagementService) {}

  @Post()
  create(@Body() createCafeManagementDto: CreateCafeManagementDto) {
    return this.cafeManagementService.create(createCafeManagementDto);
  }

  @Get()
  findAll() {
    return this.cafeManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cafeManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCafeManagementDto: UpdateCafeManagementDto) {
    return this.cafeManagementService.update(+id, updateCafeManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cafeManagementService.remove(+id);
  }
}
