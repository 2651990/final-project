import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
import MessageStyle from "./Message.module.scss";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/store";

export interface MessageProps {
  message: string;
  name: string;
  isSender: boolean;
}

export default function Message(props: MessageProps) {
  const isAdmin = useSelector((state: IRootState) => state.user.isAdmin)
  const messageStyleHandler = () => {
    let boolean = props.isSender 
    if (isAdmin) {
      boolean = !boolean
    }
    return boolean ? MessageStyle.right : MessageStyle.left;
  };
  return (
    <div className={`${MessageStyle.wrapper} ${messageStyleHandler()}`}>
      <IonCard className={`${MessageStyle.container}`}>
        <IonCardContent>
          <div>
            <div className={MessageStyle.message}>{props.message}</div>
          </div>
        </IonCardContent>
        <div className={`${MessageStyle.name} ${messageStyleHandler()}`}>
          {props.name}
        </div>
      </IonCard>
    </div>
  );
}
