import { Injectable } from '@nestjs/common';
import { CreateLeasingPackageDto } from './dto/create-leasing-package.dto';
import { PrismaClient } from '@prisma/client';
import * as aws from 'aws-sdk'


@Injectable()
export class LeasingPackagesService {

  constructor(private prisma: PrismaClient) {}

  create(createLeasingPackageDto: CreateLeasingPackageDto) {
    return 'This action adds a new leasingPackage';
  }

  async findAllPackages(packageName: string) {
    return this.prisma.packages.findMany({
      where:{
        package_name: packageName
      }
    })
  }

  async findSelectedPackageDetails(id: number) {
		const SelectedPackageDetailsResult = await this.prisma.packages.findUnique({
			where: {
				id: id
			},
			include: {
				package_all_photos: true,
        package_item: true
			}
		})
		return SelectedPackageDetailsResult
	}

}
