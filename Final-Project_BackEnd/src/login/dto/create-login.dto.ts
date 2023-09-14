import { ApiProperty } from "@nestjs/swagger"
import { IsEmail } from "class-validator"

export class CreateLoginDto {
    @ApiProperty({
        description:"Username",
        required: true,
        type:'string',
    })
    username: string

    @ApiProperty({
        description:"Email",
        example :"john.doe12345@gmail.<EMAIL>",
        required: true,
        format: 'email',
    })
    @IsEmail({
        allow_ip_domain: false,   
    })
    email: string

    @ApiProperty({
        minLength : 6,
    })
    password: string

    @ApiProperty({
        nullable: true,
    })
    profile_pic: string
}

export class LoginDto {
    @ApiProperty({
        description:"Username",
        required: true,
        type:'string',
    })
    username: string

    @ApiProperty({
        minLength : 6,
    })
    password: string
}
