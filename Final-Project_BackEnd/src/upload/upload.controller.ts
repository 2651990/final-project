import { Controller, Logger, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { ApiBody, ApiConsumes } from '@nestjs/swagger'
import { AuthGuard } from 'src/login/auth.guard';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post("images")
  @UseGuards(AuthGuard)
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
    // Logger.debug(file)
    const objectUrl = await this.uploadService.uploadToS3({
      Bucket: "finalprojectchrysan",
      Key: originalname,
      Body: buffer
    })
    console.log("objectUrl: ", objectUrl)
    return {objectUrl}
  }
}
