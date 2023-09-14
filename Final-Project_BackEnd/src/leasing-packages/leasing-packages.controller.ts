import { Controller, Get, Post, Body, Param, Logger, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { LeasingPackagesService } from './leasing-packages.service';
import { CreateLeasingPackageDto } from './dto/create-leasing-package.dto';
import { ApiBody, ApiConsumes, ApiParam } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from 'src/login/auth.guard';

@Controller('leasing-packages')
export class LeasingPackagesController {
  constructor(
    private readonly leasingPackagesService: LeasingPackagesService
    ) {}

  // @Post()
  // create(@Body() createLeasingPackageDto: CreateLeasingPackageDto) {
  //   return this.leasingPackagesService.create(createLeasingPackageDto);
  // }

  @Get('packages/:packageName')

  @ApiParam({ name: 'packageName' })
  findAll(@Param("packageName") packageName : string) {
    Logger.debug(packageName)
    return this.leasingPackagesService.findAllPackages(packageName);
  }

  @Get('packageDetails/:id')
  @ApiParam({ name: 'id' })
  findSelectedProductDetails(@Param("id") id: string) {
    Logger.debug(typeof id)
    return this.leasingPackagesService.findSelectedPackageDetails(+id);
  }

}
