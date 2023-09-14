import { Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConnectedSocket, MessageBody, OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket,Server } from 'socket.io'
import { ConfigService } from '@nestjs/config'
import { AdminService } from "src/admin/admin.service";
import { ChatroomService } from "src/chatroom/chatroom.service";


@WebSocketGateway({ cors: true})
export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect{
    @WebSocketServer() public io: Server

    constructor(
        private jwtService: JwtService,
        private configService: ConfigService,
        private adminService: AdminService,
        private chatroomService: ChatroomService

    ) {
        
    }
    afterInit(server: any) {
        Logger.debug("afterInit")
    }
    async handleConnection(socket: Socket) {
		const token = socket.handshake.headers.authorization
		if (!token) return
		const auth_token = token.split(' ')[1];
		Logger.debug(`client connected : ${socket.id}`)
		// Logger.debug(`token : ${auth_token}`)

		try {
			const payload = await this.jwtService.verifyAsync(auth_token, {
				secret: this.configService.get("JWT_SECRET")
			})
            Logger.debug(`Payload: ${JSON.stringify(payload)}`)
			// 💡 We're assigning the payload to the request object here
			// so that we can access it in our route handlers
			// Logger.debug(`token : ${JSON.stringify(payload)}`)
			const userId = payload.userId
            Logger.debug("My Socket User Id: ", userId)
            if (userId == 1) {
                const chatroomUsers = await this.adminService.getAllChatroomUser()
                for(let chatroom of chatroomUsers) {
                    const chatroomId = `chatroom_${chatroom.id}`
                    socket.join(chatroomId)
                    Logger.debug(`Admin ${userId} Joined:-${chatroomId}`)
			    }
            } else {
                const chatroom = await this.chatroomService.findChatRoomByUser(userId)
                const chatroomId = `chatroom_${chatroom.id}`
                socket.join(chatroomId)
                Logger.debug(`Client ${userId} Joined:-${chatroomId}`)
            }
		} catch(e) {
			console.log(e)
		}

		

	}
    handleDisconnect(client: any) {
        // client.close()
        Logger.debug("A client disconnected: " + client.id)
    }

    // @SubscribeMessage('joinRoomA')
    // joinRoom(@MessageBody() data: string, @ConnectedSocket() socket: Socket): string {
    //     Logger.debug(data)
    //     socket.join("RoomA")
    //     return data;
    // }

    // @SubscribeMessage('sendMessage')
    // handleEvent(@MessageBody() data: {
    //     message: string
    // }): string {
    //     Logger.debug(data.message)
    //     const message = data.message
    //     this.io.to("RoomA").emit("getMessage", {
    //         isSender: false,
    //         message: message,
    //         name: "James"
    //     })
    //     return data.message;
    // }

}