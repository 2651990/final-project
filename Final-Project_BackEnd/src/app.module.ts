import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { LeasingItemsModule } from './leasing-items/leasing-items.module';
import { UploadModule } from './upload/upload.module';
import { ProfileModule } from './profile/profile.module';
import { LeasingPackagesModule } from './leasing-packages/leasing-packages.module';
import { ConfigModule } from '@nestjs/config';
import { CartModule } from './cart/cart.module';
import { ChatroomModule } from './chatroom/chatroom.module';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { PrismaClient } from '@prisma/client';
import { AdminService } from './admin/admin.service';

@Module({
  // imports: [ConfigModule.forRoot({ isGlobal: true }), LoginModule, LeasingItemsModule, UploadModule, LeasingPackagesModule, ProfileModule, CartModule],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoginModule,
    LeasingItemsModule,
    UploadModule,
    LeasingPackagesModule,
    ProfileModule,
    CartModule,
    ChatroomModule,
    AdminModule
  ],
  controllers: [AppController, AdminController],
  providers: [AdminService, AppService, PrismaClient],
})
export class AppModule {}
