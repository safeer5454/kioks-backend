import { Injectable } from '@nestjs/common';
import { CreateCafeManagementDto } from './dto/create-cafe-management.dto';
import { UpdateCafeManagementDto } from './dto/update-cafe-management.dto';

@Injectable()
export class CafeManagementService {
  create(createCafeManagementDto: CreateCafeManagementDto) {
    return 'This action adds a new cafeManagement';
  }

  findAll() {
    return `This action returns all cafeManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cafeManagement`;
  }

  update(id: number, updateCafeManagementDto: UpdateCafeManagementDto) {
    return `This action updates a #${id} cafeManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} cafeManagement`;
  }
}
