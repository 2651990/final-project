import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { PrismaClient } from '@prisma/client';
import { LoginService } from 'src/login/login.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/login/constants';
import { HttpModule, HttpService } from '@nestjs/axios';
import { AuthService } from 'src/login/login.controller';
import { UploadService } from 'src/upload/upload.service';


@Module({
    imports: [
        HttpModule.registerAsync({
            useFactory: () => ({
                timeout: 5000,
                maxRedirects: 5,
            }),
        }),
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '600000000000s' },
        }),
    ],
    controllers: [ProfileController],
    providers: [ProfileService, PrismaClient, LoginService, JwtService, AuthService, UploadService]
})

export class ProfileModule { }