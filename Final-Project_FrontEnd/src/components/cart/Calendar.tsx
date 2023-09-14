
import { IonDatetime } from '@ionic/react';

export default function Calendar() {
  const isWeekday = (dateString: string) => {

    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    return utcDay !== -1 ;
  };

  return <IonDatetime isDateEnabled={isWeekday} locale="en" > </IonDatetime>;
}
