import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Logger } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from 'src/login/auth.guard';


@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @UseGuards(AuthGuard)
  @Get('chatroom')
  async getChatRoom(@Request() req) {
    const payload = await req.user.userId
    const result = await this.adminService.getChatRoom(payload)
    return result
  }

  @UseGuards(AuthGuard)
  @Get('username')
  async getUsername(@Request() req) {
    const payload = await req.user.userId
    const result = await this.adminService.getUsername(payload)
    return result
  }

  @UseGuards(AuthGuard)
  @Get('chatroom/users')
  async getAllChatroomUser(@Request() req) {
    const userId = await req.user.userId
    if (userId != 1) {
      throw new Error("You are not admin")
    }
    const result = await this.adminService.getAllChatroomUser()
    return result
  }

}
