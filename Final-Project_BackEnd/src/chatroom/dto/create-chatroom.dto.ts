import { ApiProperty } from "@nestjs/swagger";

export class CreateChatroomDto {
    @ApiProperty({
        required: true,
        type:'boolean',
    })
    isSenderMsg: boolean

    @ApiProperty({
        required: true,
        type:'string',
    })
    content: string

    @ApiProperty({
        required: true,
        type:'number',
    })
    chatroomId: number

}
