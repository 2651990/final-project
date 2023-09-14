import { Controller, Get, Post, Body, Param, Logger, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { LeasingItemsService } from './leasing-items.service';
import { CreateLeasingItemDto } from './dto/create-leasing-item.dto';
import { ApiParam } from '@nestjs/swagger';
import { AuthGuard } from 'src/login/auth.guard';

@Controller('leasing-items')
export class LeasingItemsController {
  constructor(
    private readonly leasingItemsService: LeasingItemsService
    ) {}

  // @Post()
  // create(@Body() createLeasingItemDto: CreateLeasingItemDto) {
  //   return this.leasingItemsService.create(createLeasingItemDto);
  // }

  @Get('items/:typeName')
  @ApiParam({ name: 'typeName' })
  findAll(@Param("typeName") typeName : string) {
    Logger.debug(typeName)
    return this.leasingItemsService.findAllProducts(typeName);
  }

  @Get('itemDetails/:id')
  @ApiParam({ name: 'id' })
  findSelectedProductDetails(@Param("id") id: string) {
    Logger.debug(typeof id)
    return this.leasingItemsService.findSelectedProductDetails(+id);
  }
}



