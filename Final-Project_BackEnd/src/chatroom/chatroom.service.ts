import { Injectable } from '@nestjs/common';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { UpdateChatroomDto } from './dto/update-chatroom.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ChatroomService {
  constructor(private prisma: PrismaClient) { }

  async findChatRoomByUser(userId: number) {
    const chatroom = await this.prisma.chatroom.findFirst({
      where: {
        sender_id: userId,
        admin_id: 1
      }
    })
    return chatroom
  }
  async createChatroom(sender_id: number) {
    const chatroom = await this.prisma.chatroom.findFirst({
      where: {
        sender_id
      }
    })

    if (!chatroom) {
      await this.prisma.chatroom.create({
        data: {
          sender_id,
          admin_id: 1
        }
      })
    }
  }

  async getChatroomIdBySender(senderId: number): Promise<number> {
    const chatroom = await this.prisma.chatroom.findFirstOrThrow({
      where: {
        sender_id: senderId,
        admin_id: 1
      }
    })
    return chatroom.id
  }
  async create(senderId: number, chatroomId: number, isSenderMsg: boolean, content: string) {
    const result = await this.prisma.message.create({
      data: {
        sender_id: senderId,
        chatroom_id: chatroomId,
        is_sender_msg: isSenderMsg,
        admin_id: 1,
        content: content
      }
    })
    return result
  }

  async findMessageByChatroom(chatroomId: number) {
    const result = await this.prisma.message.findMany({
      include: {
        sender: true,
        admin: true,
      },
      where: {
        chatroom_id: chatroomId
      },
      orderBy: {
        id: "asc"
      }
    })
    return result
  }

 async findAllMessage(userId: number) {
  const adminWhere = {admin_id: userId}
  const clientWhere = { sender_id: userId }

  let finalWhere = {}
    if (userId === 1) {
      finalWhere = adminWhere
    } else {
      finalWhere = clientWhere

    }
    // console.log(clientWhere)
    const result = await this.prisma.message.findMany({
      include: {
        sender: true,
        admin: true,
      },
      where: finalWhere,
      orderBy: {
        id: "asc"
      }
    })
    // console.log(result)
    return result
  }

  async findOne(chatroomId: number) {
    return await this.prisma.chatroom.findFirstOrThrow({
      where: {
        id: chatroomId
      }
    })
  }

  update(id: number, updateChatroomDto: UpdateChatroomDto) {
    return `This action updates a #${id} chatroom`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatroom`;
  }
}
