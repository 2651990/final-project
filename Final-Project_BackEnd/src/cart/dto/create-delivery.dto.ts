import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateDeliveryDto {

    @IsNotEmpty()
    @IsNumber()
    mobile: number

    @IsNotEmpty()
    site: number

    @IsNotEmpty()
    deliver_date: string

    @IsNotEmpty()
    deliver_time: string
}

