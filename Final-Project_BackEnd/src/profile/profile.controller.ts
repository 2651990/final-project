import { Controller, Get, Logger, UseGuards, Request, Post, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { UploadController } from '../upload/upload.controller'
import { AuthGuard } from 'src/login/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ApiBody, ApiConsumes, ApiParam } from '@nestjs/swagger';
import { UploadService } from 'src/upload/upload.service';



@Controller('profile')

export class ProfileController {
    uploadController: UploadController;

    constructor(private readonly profileService: ProfileService,
        private readonly uploadService: UploadService) {
    }


    @UseGuards(AuthGuard)
    @Get('/user')
    async getUserId(@Request() req) {
        const payload = await req.user;
        const payloadUserId = await payload.userId;
        const checkUserExists = await this.profileService.findUserNameEmail(payloadUserId)
        return checkUserExists;
    }

    @UseGuards(AuthGuard)
    @Get('/orders')
    async getOrderId(@Request() req) {
        const payload = await req.user
        const payloadUserId = await payload.userId;
        // const payloadSiteId = req.query.siteId;

        const orderInfo = await this.profileService.getUsersOrders(
            payloadUserId,
            // payloadSiteId,

        );
        console.log(orderInfo)
        return orderInfo
    }

    @UseGuards(AuthGuard)
    @Get('/orderDeatails/:id')
    @ApiParam({ name: 'id' })
    async getOrderDetails(@Param("id") id: string,) {
        Logger.debug("order_id", id)
        return this.profileService.findOrderItemsDetails(+id)
    }


    @UseGuards(AuthGuard)
    @Post("images")
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary'
                }
            }
        }
    })
    async uploadImage(@UploadedFile() file: Express.Multer.File) {
        const originalname = file.originalname
        const buffer = file.buffer

        const objectUrl = await this.uploadService.uploadToS3({
            Bucket: "finalprojectchrysan",
            Key: originalname,
            Body: buffer
        })
        Logger.debug({objectUrl})

        return { objectUrl }
    }
}



