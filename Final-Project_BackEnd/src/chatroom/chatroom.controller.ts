import {
  Controller,
  Request,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { ChatroomService } from './chatroom.service';
import { CreateChatroomDto } from './dto/create-chatroom.dto';
import { AuthGuard } from 'src/login/auth.guard';
import { SocketGateway } from 'src/socket/socket';

@Controller('chatroom')
export class ChatroomController {
  constructor(
    private readonly chatroomService: ChatroomService,
    private socketGateway: SocketGateway,
  ) {}

  @Post('message')
  @UseGuards(AuthGuard)
  async createMessage(
    @Request() req,
    @Body() createChatroomDto: CreateChatroomDto,
  ) {
    const userId = req.user.userId;
    Logger.debug(`userId: ` + userId)


    let chatroomId = createChatroomDto.chatroomId;
    if (userId != 1 && !chatroomId) {
      chatroomId = await this.chatroomService.getChatroomIdBySender(
        userId,
      );
    }

    const chatroom = await this.chatroomService.findOne(chatroomId)
    const sender_id = chatroom.sender_id
    const admin_id = chatroom.admin_id

    const record = await this.chatroomService.create(
      sender_id,
      chatroomId,
      createChatroomDto.isSenderMsg,
      createChatroomDto.content
    );
    const chatroomName = `chatroom_${chatroomId}`
    this.socketGateway.io
      .to(chatroomName)
      .emit('getMessage', createChatroomDto.content);
    Logger.debug(`Send Msg to-` + chatroomName)

    return record;
  }

  @UseGuards(AuthGuard)
  @Get('/:chatroomId/message')
  async findMessageByChatroom(
    @Param('chatroomId') chatroomId: any,
    @Request() req,
  ) {
    // const userId = req.user.userId
    const result = await this.chatroomService.findMessageByChatroom(
      parseInt(chatroomId),
    );
    // Logger.debug(JSON.stringify(result))
    return result;
  }

  @UseGuards(AuthGuard)
  @Get('message')
  async findAllMessage(@Request() req) {
    const userId = req.user.userId;
    const result = await this.chatroomService.findAllMessage(userId);
    // Logger.debug(JSON.stringify(result))
    return result;
  }
}
