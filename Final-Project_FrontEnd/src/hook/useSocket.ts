import { useState } from "react";
import { Socket, io } from "socket.io-client";

export const useSocket = () => {
  // const ws = useSelector((state: IRootState) => state.user.ws)
  const [ws, setWs] = useState<Socket | null>(null)
  const connectWebSocket = () => {
    //開啟
    const socket = io(import.meta.env.VITE_API_SOCKET_SERVER,{
      extraHeaders: {
        Authorization: `Bearer ${localStorage?.getItem("token")}`
      }
    }).connect()
    setWs(socket)
  };

  const turnOnSocket = () => {
    connectWebSocket();
  };
  return { ws, turnOnSocket };
};
