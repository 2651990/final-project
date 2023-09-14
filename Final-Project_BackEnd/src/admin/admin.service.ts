import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {

  constructor(private prisma: PrismaClient) { }

  async getChatRoom(userId: number) {
    const chatRoomId = await this.prisma.chatroom.findMany({
    });
    return chatRoomId
  }

  async getUsername(userId: number) {
    const getUsername = await this.prisma.chatroom.findMany({
      where: {
        sender_id: userId,
      },
      include: {
        sender: true
      }
    });
    return getUsername[0].sender.username
  }

  async getAllChatroomUser() {
    const rooms = await this.prisma.chatroom.findMany({
      where: {
        admin_id: 1,
      },
      include: {
        sender: true
      }
    });
    return rooms
  }



}
