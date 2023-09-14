import * as aws from 'aws-sdk'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UploadService {
	private readonly s3: aws.S3
	constructor() {
		this.s3 = new aws.S3({
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
			region: 'ap-southeast-1'
		})
	}

	async uploadToS3(params: {
		Bucket: string
		Key: string // S3 Destination 
		Body: Buffer
	}): Promise<string> {
		const s3Url = await this.putObjectPromise(this.s3, params)
		return s3Url
	}

	private putObjectPromise(
		s3: aws.S3,
		params: {
			Bucket: string
			Key: string
			Body: Buffer
		}
	): Promise<string> {
		return new Promise((resolve, reject) => {
			s3.putObject(params, (err: any) => {
				if (err) {
					console.debug('Error uploading data: ' + err)
					reject(err)
				} else {
					resolve(
						`https://${params.Bucket}.s3.ap-southeast-1.amazonaws.com/${params.Key}`
					)
				}
			})
		})
	}
}
