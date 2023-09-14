import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {

  constructor(private prisma: PrismaClient, private jwtService: JwtService) { }

  async login(username: string, password: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        username,
        password,
      }
    })

    if (user) {
      const payload = {userId: user.id};
      const token = await this.jwtService.signAsync(payload);
      return { msg: 'success', access_token: token, userId: user.id, isAdmin: user.id === 1 };
    }

    throw new UnauthorizedException('Login Fail');
  }

  async createAccount(username: string, password: string, email: string) {
    console.log({
      username,
      password,
      email,
    })
    return await this.prisma.users.create({
      data: {
        username,
        password,
        email,
      }
    });
  }

  async checkUserExists(username: string, password: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        username,
        password,
      }
    })
    return user
  }

  async genToken(payload: any) {
    const token = await this.jwtService.signAsync(payload);
    return token
  }
  async checkExistByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: {
        email
      }
    })
    return user
  }

  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  async findOne(id: number) {
    return await this.prisma.users.findUnique({
      where: { id },
    })
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
}
