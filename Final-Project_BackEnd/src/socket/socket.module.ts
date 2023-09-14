import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { ChatroomService } from 'src/chatroom/chatroom.service';
import { AdminService } from 'src/admin/admin.service';
import { SocketGateway } from './socket';

@Module({
  imports: [],
  providers: [PrismaClient, JwtService, ChatroomService, AdminService, SocketGateway]
})
export class SocketModule {}