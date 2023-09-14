import { ApiProperty } from "@nestjs/swagger"
import { IsEmail } from "class-validator"

export class CreateUserDto {
    @ApiProperty({
        description:"Username",
        required: true,
        type:'string',
    })
    username: string

    @ApiProperty({
        description:"Email",
        example :"john.doe12345@gmail.com",
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
}

