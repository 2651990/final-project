import { PartialType } from '@nestjs/swagger';
import { CreateLeasingItemDto } from './create-leasing-item.dto';

export class UpdateLeasingItemDto extends PartialType(CreateLeasingItemDto) {}
