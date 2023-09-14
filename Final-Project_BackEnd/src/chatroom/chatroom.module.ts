import { Module } from '@nestjs/common';
import { ChatroomService } from './chatroom.service';
import { ChatroomController } from './chatroom.controller';
import { PrismaClient } from '@prisma/client';
import { SocketModule } from 'src/socket/socket.module';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from 'src/admin/admin.service';
import { SocketGateway } from 'src/socket/socket';

@Module({
  imports: [SocketModule],
  controllers: [ChatroomController],
  providers: [ChatroomService, PrismaClient, JwtService, ChatroomService, AdminService, SocketGateway]
})
export class ChatroomModule {}
