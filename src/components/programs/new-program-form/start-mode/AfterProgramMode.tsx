import React, { useState, useEffect } from 'react';
import {
  IonCol,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonList,
  IonListHeader,
} from '@ionic/react';
import { CREATED_PROGRAMS }from '../../../../data/dummy-data'


const AfterProgramMode: React.FC  = () => {
    interface IProgram {
        id: number;
        title: string;
    }
    type Program = typeof CREATED_PROGRAMS[number];

    const compareWithPrograms = (o1: Program, o2: Program) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
    };

    const [afterProgram, setAfterProgram] = useState<IProgram | undefined>(
    undefined
    );

  return (
    <IonCol>
      <IonList>
        <IonListHeader class='ion-no-padding'>
          <IonLabel>Iniciar tras el programa...</IonLabel>
        </IonListHeader>
        <IonItem class='ion-no-padding'>
          <IonLabel position='floating'>Elige un programa </IonLabel>
          <IonSelect
            mode='ios'
            compareWith={compareWithPrograms}
            value={afterProgram}
            onIonChange={(e) => {
              setAfterProgram(e.detail.value);
            }}
            okText='Aceptar'
            cancelText='Cancelar'
          >
            {CREATED_PROGRAMS.map((option) => (
              <IonSelectOption key={option.id} value={option}>
                {option.title
                  ? `${option.title} (#${option.id})`
                  : `Programa #${option.id}`}
              </IonSelectOption>
            ))}
          </IonSelect>
        </IonItem>
      </IonList>
    </IonCol>
  );
};

export default AfterProgramMode;
