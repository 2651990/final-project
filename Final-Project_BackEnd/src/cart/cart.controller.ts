import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/login/auth.guard';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('deliveryInfo')
  @UseGuards(AuthGuard)
  create(
    @Body() createDeliveryDto: CreateDeliveryDto,
    @Request() req) {
    // console.log(req)
    const userId = req.user.userId
    Logger.debug("createDeliveryDto:", createDeliveryDto)
    return this.cartService.createDeliveryInfo(userId, createDeliveryDto);
  }

  @Patch('item/qty')
  @UseGuards(AuthGuard)
  updateCartItemQty(
    @Body() updateCartDto: any,
    @Request() req) {
    const userId = req.user.userId
    return this.cartService.updateItemQty(updateCartDto.cartId, updateCartDto.qty);
  }

  @Post('addToCart')
  @UseGuards(AuthGuard)
  addToCart(
    @Body() createCartDto: CreateCartDto,
    @Request() req) {
    const userId = req.user.userId
    return this.cartService.addToCart(userId, createCartDto);
  }

  @Get('userAllCartItems')
  @UseGuards(AuthGuard)
  async findAll(@Request() req) {
    const userId = req.user.userId
    // Logger.debug("userId: " + userId)
    const result = await this.cartService.findItemsInCartByUser(userId);
    // Logger.debug(result)
    const formattedResult = result.map(item=> {
      let newItem = {...item}
      if (item.single_item_id) {
        newItem['item'] = item.single_item
      } else if (item.packages_id) {
        newItem['item'] = item.packages
      }
      delete newItem['packages']
      delete newItem['single_item']
      return newItem
    })
    return formattedResult
  }

  @Delete('deleteCartItem/:id')
  async remove(@Param("id") id: string){
    return this.cartService.deleteCartItem(id)
  }

}