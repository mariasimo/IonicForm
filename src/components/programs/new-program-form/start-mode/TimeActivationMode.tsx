import React, { useState, useEffect } from 'react';
import {
  IonCol,
  IonItem,
  IonLabel,
  IonButton,
  IonDatetime,
  IonList,
  IonListHeader,
} from '@ionic/react';

const TimeActivationMode: React.FC  = () => {
  const initHour = '09:00';
  const [timesheets, setTimesheet] = useState<string[]>([initHour]);
  const [removeSlot, setRemoveSlot] = useState<number | null>(null);
  const maxSize = 24;

  const addSlotToTimesheet = () => {
    (timesheets.length < maxSize) && setTimesheet([...timesheets, initHour]);
  };

  const saveHourInTimesheet = (value: string, idx: number) => {
    if (removeSlot) return;
    if (value === timesheets[idx]) return;

    const newTimesheets = [...timesheets].map((el, elIdx) =>
      elIdx === idx ? value : el
    );
    setTimesheet([...newTimesheets]);
    setRemoveSlot(null);
  };

  useEffect(() => {
    if (typeof removeSlot === 'number') {
      const newTimesheets = [...timesheets];
      newTimesheets.splice(removeSlot, 1);
      setTimesheet(newTimesheets);
      setRemoveSlot(null);
    }
  }, [removeSlot, timesheets]);

  return (
    <>
      <IonCol size='12'>
        <IonList>
          <IonListHeader class='ion-no-padding'>
            <IonLabel>
              Añade una hora de inicio
              <p>{24 - timesheets.length}/24 espacios disponibles</p>
            </IonLabel>
          </IonListHeader>

          {timesheets.map((slot, idx) => (
            <IonItem key={idx} class='ion-no-padding'>
              <IonLabel>
                <h3>Hora</h3>
              </IonLabel>
              <IonDatetime
                displayFormat='HH:mm'
                value={slot}
                placeholder={slot}
                cancelText='Cancelar'
                doneText='Confirmar'
                onIonChange={(e: CustomEvent) =>
                  saveHourInTimesheet(e.detail.value, idx)
                }
              />

              <IonButton
                fill='outline'
                slot='end'
                onClick={() => setRemoveSlot(idx)}
              >
                Borrar
              </IonButton>
            </IonItem>
          ))}
        </IonList>
      </IonCol>
      <IonCol>
        <IonButton
          fill='outline'
          color='medium'
          onClick={() => addSlotToTimesheet()}
        >
          Añadir hora de inicio
        </IonButton>
      </IonCol>
    </>
  );
};

export default TimeActivationMode;
