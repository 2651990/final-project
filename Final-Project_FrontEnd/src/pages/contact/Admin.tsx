import {
    IonButton,
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonList,
    IonPage,
    IonRow
} from "@ionic/react";
import { useQuery } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import TopTitleBar from "../../components/TopTitleBar";
import "../../components/browse/browse.css";
import "../profile/Profile.css";

interface ChatRoomTypes {
    sender: any;
    id: number;
    sender_id: number;
}

const Admin: React.FC = () => {
    const [chatRoom, setChatRoom] = useState<ChatRoomTypes[]>([]);

    const res1 = useQuery({
        queryKey: ["chatRoom"],
        queryFn: async () => {
            const res = await fetch(
                `${import.meta.env.VITE_API_SERVER}/admin/chatroom/users`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );
            if (!res.ok) {
                throw new Error("You are not Admin!!!");
            }
            const data = await res.json();
            setChatRoom(data); 
            return data;
        },
    });

    const history = useHistory();

    const goToPage = (path: string) => {
        history.push(path);
    };

    const handleColClick = (chatRoomId: number) => {
        goToPage(`/contact/${chatRoomId}`);
    };

    useEffect(() => {
        const storedChatRoom = localStorage.getItem("chatRoom");
        if (storedChatRoom) {
            setChatRoom(JSON.parse(storedChatRoom));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("chatRoom", JSON.stringify(chatRoom));
    }, [chatRoom]);

    useEffect(() => {
        const handleNewChatRoom = (newChatRoom: ChatRoomTypes) => {
            setChatRoom((prevChatRooms) => [...prevChatRooms, newChatRoom]);
        };

        const createNewChatRoom = () => {
            const newChatRoom: ChatRoomTypes = {
                sender: { username: "New User" },
                id: chatRoom.length + 1,
                sender_id: chatRoom.length + 1,
            };

            handleNewChatRoom(newChatRoom);
        };

        createNewChatRoom();
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <TopTitleBar />
            </IonHeader>

            <IonContent>
                <IonList className="chatRoomList" id="chatRoomList">
                    {chatRoom.length > 0 &&
                        chatRoom.map((item: ChatRoomTypes, index: number) => (
                            <div key={index}>
                                <IonCard>
                                    <IonGrid>
                                        <IonRow>
                                            <IonCol>
                                                <IonButton
                                                    expand="full"
                                                    fill="clear"
                                                    onClick={() =>
                                                        handleColClick(item.id)
                                                    }
                                                >
                                                    {item.sender.username}
                                                </IonButton>
                                            </IonCol>
                                        </IonRow>
                                    </IonGrid>
                                </IonCard>
                            </div>
                        ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Admin;
