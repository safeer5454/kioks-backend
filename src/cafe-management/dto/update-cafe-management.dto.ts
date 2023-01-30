import { PartialType } from '@nestjs/mapped-types';
import { CreateCafeManagementDto } from './create-cafe-management.dto';

export class UpdateCafeManagementDto extends PartialType(CreateCafeManagementDto) {}
