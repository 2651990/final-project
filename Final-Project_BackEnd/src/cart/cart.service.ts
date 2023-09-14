import { Injectable, Logger } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaClient } from '@prisma/client';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

function displayCurrentDateTime() {
  // Get the current date and time
  const currentDate = new Date();

  // Extract the date components
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  // Extract the time components
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getSeconds()).padStart(2, '0');

  // const formattedDateTime = `${year}-${month}-${day}`;
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  // const currentDate2 = new Date(formattedDateTime);
  return formattedDateTime
}

@Injectable()
export class CartService {
  constructor(private prisma: PrismaClient) { }

  async createCart(userId: number, createCartDto: CreateCartDto) { }

  async createDeliveryInfo(
    userId: number,
    createDeliveryDto: CreateDeliveryDto,
  ) {
    const carts = await this.prisma.cart.findMany({
      include: {
        single_item: true,
        packages: {
          include: {
            package_item: {
              include: {
                single_item: true
              }
            }
          }
        },
      },
      where: {
        user_id: userId,
      },
    });

    await this.prisma.$transaction(async (trx) => {

      if (carts.length > 0) {

        const totalPrice = carts.reduce((accumulator, currentValue) => {
          let isSingleItem = !!currentValue.single_item_id
          let total = 0
          // Logger.debug(JSON.stringify(currentValue?.packages?.package_item))

          if (isSingleItem) {
            total = accumulator + currentValue.single_item.price
          } else {
            total = accumulator + currentValue.packages.price
            // for (let packageItem of currentValue?.packages?.package_item) {
            //   total = accumulator + packageItem.single_item.price
            // }
          }
          return total
        }, 0);

        const insertToOrder = await trx.orders.create({
          data: {
            user_id: userId,
            mobile: createDeliveryDto.mobile,
            deliver_date: createDeliveryDto.deliver_date,
            deliver_time: createDeliveryDto.deliver_time,
            official_camp_site_id: Number(createDeliveryDto.site),
            payment: totalPrice,
            payment_date: displayCurrentDateTime()
          },
        });
        const InsertToOrderItems = carts.map((item) => ({
          order_id: insertToOrder.id,
          single_item_id: item.single_item_id,
          packages_id: item.packages_id,
          quantity: item.quantity,
          price: item.single_item_id ? item.single_item.price : item.packages.price,
        }));
        await trx.order_item.createMany({ data: InsertToOrderItems });

        await trx.cart.deleteMany({
          where: {
            user_id: userId
          }
        })
      }
    });
    return { message: 'success' };
  }

  async addToCart(userId: number, createCartDto: CreateCartDto) {
    return await this.prisma.cart.create({
      data: {
        packages_id: createCartDto.packages_id,
        single_item_id: createCartDto.single_item_id,
        quantity: createCartDto.quantity,
        user_id: userId
      }
    })
  }

  async updateItemQty(cartItemId: number, qty: number) {
    const updateUser = await this.prisma.cart.update({
      where: {
        id: cartItemId      },
      data: {
        quantity: qty
      },
    })
      return updateUser
  }
  


  async findItemsInCartByUser(userId: number) {
    const ItemsInCart = await this.prisma.cart.findMany({
      where: {
        user_id: userId,
      },
      include: {
        users: true,
        single_item: true,
        packages: true
      },
    });
    return ItemsInCart;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} cart`;
  // }

  // update(id: number, updateCartDto: UpdateCartDto) {
  //   return `This action updates a #${id} cart`;
  // }

  deleteCartItem(id: string) {
    return this.prisma.cart.delete({
      where: {
        id: parseInt(id)
      }
    })
  }
}
