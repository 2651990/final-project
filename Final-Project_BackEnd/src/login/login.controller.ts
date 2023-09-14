import {
  Controller,
  Post,
  Body,
  Logger,
  UnauthorizedException,
  UseGuards,
  Request,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto, LoginDto } from './dto/create-login.dto';
import { CreateUserDto } from './dto/register.dto';
import { AuthGuard } from './auth.guard';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { GoogleDto } from './dto/google-dto';
import { AxiosError } from 'axios';
import { Injectable } from '@nestjs/common';
import { ChatroomService } from 'src/chatroom/chatroom.service';

@Injectable()
export class AuthService {
  public getUserFromId(id: number) {}
}

@Controller('user')
export class LoginController {
  getUserIdFromPayload(payload: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private readonly loginService: LoginService,
    private readonly httpService: HttpService,
    private readonly chatroomService: ChatroomService,
  ) {}

  @Post('/register')
  async register(@Body() createUserDto: CreateUserDto) {
    const newAccount = this.loginService.createAccount(
      createUserDto.username,
      createUserDto.password,
      createUserDto.email,
    );
    if (newAccount) {
      console.log('New Account has been created');
      return newAccount;
    }
  }

  @Post('/login')
  async login(@Body() createLoginDto: LoginDto) {
    const user = await this.loginService.login(
      createLoginDto.username,
      createLoginDto.password,
    );
    if (!user.isAdmin) {
      await this.chatroomService.createChatroom(user.userId);
    }
    return this.loginService.login(
      createLoginDto.username,
      createLoginDto.password,
    );
  }

  @UseGuards(AuthGuard)
  @Post('/profile')
  async getUserProfile(@Request() req) {
    const userId = req.user.userId;
    const userProfile = await this.loginService.findOne(userId);
    return userProfile;
  }

  @Post('facebook')
  async facebookLogin(@Body() createAuthDto: { code: string }) {
    const code = createAuthDto.code;

    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: process.env.FACEBOOK_CLIENT_ID + '',
      client_secret: process.env.FACEBOOK_CLIENT_SECRET + '',
      code: code + '',
      redirect_uri: `${process.env.REACT_PUBLIC_HOSTNAME}/facebook-callback`,
    });

    // Logger.debug(params);
    const { data } = await firstValueFrom(
      this.httpService
        .post(`https://graph.facebook.com/oauth/access_token`, params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        })
        .pipe(
          catchError((error: any) => {
            console.log(error.message);
            throw new Error(error.message);
          }),
        ),
    );

    const access_token = data.access_token;

    const { data: profileData } = await firstValueFrom(
      this.httpService
        .get(
          `https://graph.facebook.com/me?fields=id,name,email,picture&access_token=${access_token}`,
          {},
        )
        .pipe(
          catchError((error: any) => {
            console.log(error.message);
            throw new Error(error.message);
          }),
        ),
    );

    const username = profileData.name;
    const email = profileData.email;
    const password = profileData.password;
    let fbAccount = await this.loginService.checkExistByEmail(email);

    if (!fbAccount) {
      await this.loginService.createAccount(password, email, username);
      fbAccount = await this.loginService.checkExistByEmail(email);
      if (fbAccount.id != 1) {
        await this.chatroomService.createChatroom(fbAccount.id);
      }
    }

    const payload = {
      userId: fbAccount.id,
      profileData,
    };
    // const token = ''; 
    const token = await this.loginService.genToken(payload);
    return { token, profileData, userId: payload.userId };
  }

  @Post('googleLogin')
  async googleLogin(@Body() googleDto: GoogleDto) {
    const accessToken = googleDto.accessToken;
    Logger.debug('accessToken: ' + accessToken);

    const { data } = await firstValueFrom(
      this.httpService
        .get('https://www.googleapis.com/oauth2/v2/userinfo', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            // console.log(error)
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
          }),
        ),
    );
    const email = data.email;
    const name = data.name;
    const picture = data.picture;
    const password = data.password;
    let googleAccount = await this.loginService.checkExistByEmail(email);
    // Logger.debug("googleAccount: "+  googleAccount)

    if (!googleAccount) {
      await this.loginService.createAccount(name, '', email);
      googleAccount = await this.loginService.checkExistByEmail(email);
      if (googleAccount.id != 1) {
        await this.chatroomService.createChatroom(googleAccount.id);
      }
    }
    const payload = {
      userId: googleAccount.id,
      googleProfile: data,
    };
    const token = await this.loginService.genToken(payload);

    Logger.debug('data: ' + JSON.stringify(data));
    return { token, googleProfile: data, userId: payload.userId };
  }
}
