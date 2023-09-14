import { Module } from '@nestjs/common';
import { LeasingItemsService } from './leasing-items.service';
import { LeasingItemsController } from './leasing-items.controller';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [LeasingItemsController],
  providers: [LeasingItemsService, PrismaClient]
})
export class LeasingItemsModule {}
