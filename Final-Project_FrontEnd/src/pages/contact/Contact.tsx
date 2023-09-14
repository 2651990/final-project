import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  useIonViewWillEnter
} from "@ionic/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import { chatboxEllipses } from "ionicons/icons";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import TopTitleBar from "../../components/TopTitleBar";
import "../../components/contact/contact.css";
import { IRootState } from "../../redux/store";
import Message from "./Message";
import { useSocket } from "../../hook/useSocket";
import { useParams } from "react-router";
  const Contact: React.FC = () => {
    const isAdmin = useSelector((state: IRootState) => state.user.isAdmin);
    const itemRef = useRef<any>();
    // const ws = useSelector((state: IRootState) => state.user.ws)

    const {ws, turnOnSocket} = useSocket()
    const {chatroomId} = useParams<{chatroomId: string}>()
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event: any) => {
      const value = event.detail.value;
      setInputValue(value);
    };
    const {
      data: messages,
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["Message", chatroomId],
      queryFn: async ({queryKey}) => {
        const [_, chatroomId] = queryKey
        let url = ''
        if (isAdmin) {
          url =  `${import.meta.env.VITE_API_SERVER}/chatroom/${chatroomId}/message`
        } else {
          url = `${import.meta.env.VITE_API_SERVER}/chatroom/message`
        }

        const res = await fetch(
          url,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (!res.ok) {
          throw new Error("Cannot Get Cart Items!");
        }
        return await res.json();
      },
      enabled: false,
    });
    const sendMsgMutation = useMutation({
      mutationFn: async (form: {
        isSenderMsg: boolean;
        content: string;
        chatroomId: number;
      }) => {
        const { isSenderMsg, content, chatroomId } = form;
        const res = await fetch(
          `${import.meta.env.VITE_API_SERVER}/chatroom/message`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ isSenderMsg, content, chatroomId }),
          }
        );
        if (!res.ok) {
          alert("Fail to send msg");
          return;
        }
        const data = res.json();
        return data;
      },
      onSuccess: async (data: any) => {
        refetch();
      },
    });
    

    const submitMessage = () => {
      setInputValue("")
      sendMsgMutation.mutate({
        isSenderMsg: isAdmin ? false : true,
        content: inputValue,
        chatroomId: parseInt(chatroomId)
      });
    };
    useIonViewWillEnter(() => {
      turnOnSocket()
      refetch();
    })

    useEffect(() => {
      if (ws) {
        console.log(ws)
        ws.on("getMessage", () => {
          refetch();
        })
      }
    }, [ws])
    useEffect(() => {    
      setTimeout(() => {
          if (itemRef.current) {
              itemRef.current.scrollIntoView({
                  block: 'center',
                  inline: 'center',
              });
          }
      }, 100);
    }, [messages])

    const getMessageName = (item: any): string => {
      if (item.is_sender_msg) {
        return item.sender.username;
      } else {
        return item.admin.username;
      }
    };
    return (
      <IonPage>
        <IonHeader>
          <TopTitleBar />
        </IonHeader>
  
        <IonContent class="contact-content">
          <div className="contactContainer">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <div className="contactTextMargin">
                    Contact with us
                    <IonIcon icon={chatboxEllipses} />
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className="titleName">Your Message</div>
                </IonCol>
              </IonRow>
            </IonGrid>
  
            <IonList className="list">
              {messages &&
                messages.length > 0 &&
                messages.map((item: any, index: number) => (
                  <div
                    key={item.id}
                    ref={index == messages.length - 1 ? itemRef : null}
                  >
                    <Message
                      isSender={item.is_sender_msg}
                      message={item.content}
                      name={getMessageName(item)}
                    />
                  </div>
                ))}            
            </IonList>
          </div>
        </IonContent>
  
        <IonFooter translucent={true}>
          <IonItem>
            <IonInput
              className="inputArea"
              value={inputValue}
              onIonInput={handleInputChange}
            ></IonInput>
          </IonItem>
          <div className="submit">
            <IonButton
              onClick={submitMessage}
              size="large"
              color="light"
              type="submit"
            >
              Submit 
  
            </IonButton>
          </div>
        </IonFooter>
      </IonPage>
    );
  };
  
  export default Contact;
  