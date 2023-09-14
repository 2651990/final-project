import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client';
import { ProfileController } from './profile.controller';

@Injectable()
export class ProfileService {
    profilecontroller: ProfileController;

    constructor(private prisma: PrismaClient) { }

    async checkUserExists(username: string, password: string) {
        const user = await this.prisma.users.findUnique({
            where: {
                username,
                password,
            }
        })
        return user
    }

    async findUserNameEmail(payloadUserId: number) {
        const userInfo = await this.prisma.users.findUnique({
            where: {
                id: payloadUserId,
            },
            select: {
                username: true,
                email: true
            },
        });
        return userInfo
    }

    async getUsersOrders(payloadUserId: number) {
        const orderInfo = await this.prisma.orders.findMany({
            include: {
                order_item: true,
            },
            where: {
                user_id: payloadUserId,
            },
        });
        return orderInfo
    }

    async findOrderItemsDetails(id: number) {
        const orderItemsInfo = await this.prisma.order_item.findMany({
            include: {
                orders: true,
                single_item: true,
                packages: true
            },
            where: {
                order_id: id,
            },
        })

        const formattedResult = orderItemsInfo.map(item => {
            let newItem = { ...item }
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

}

