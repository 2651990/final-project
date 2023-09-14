import { Module } from '@nestjs/common';
import { LeasingPackagesService } from './leasing-packages.service';
import { LeasingPackagesController } from './leasing-packages.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [LeasingPackagesController],
  providers: [LeasingPackagesService, PrismaClient]
})
export class LeasingPackagesModule {}
