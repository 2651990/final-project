import { PartialType } from '@nestjs/swagger';
import { CreateLeasingPackageDto } from './create-leasing-package.dto';

export class UpdateLeasingPackageDto extends PartialType(CreateLeasingPackageDto) {}
