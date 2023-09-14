
import { IsNotEmpty } from "class-validator";

export class CreateCartDto {

single_item_id?: number

packages_id?: number

@IsNotEmpty()
quantity: number

}
