import React, { useState, useEffect } from 'react';
import {
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonList,
  IonListHeader,
} from '@ionic/react';

const RadiationActMode: React.FC = () => {


  return (
    <IonCol>
      <IonList>
        <IonListHeader class='ion-no-padding  ion-margin-bottom'>
          <IonLabel>Configuración adicional</IonLabel>
        </IonListHeader>

        <IonLabel>
          Radiación solar mínima
          <p>Por debajo de este valor, el programa no se iniciará</p>
        </IonLabel>

        <IonItem class='ion-no-padding  ion-margin-bottom'>
          <IonInput
            type='number'
            inputMode='numeric'
            max='2000'
            min='0'
            name='minRadiation'
            placeholder='2000'
            required
          ></IonInput>
          <IonLabel>
            <p>w/m2</p>
          </IonLabel>
        </IonItem>

        <IonLabel>
          Energía solar mínima
          <p>Por debajo de este valor, el programa no se iniciará</p>
        </IonLabel>

        <IonItem class='ion-no-padding ion-margin-bottom'>
          <IonInput
            type='number'
            inputMode='numeric'
            max='9999'
            min='0'
            name='minEnergy'
            placeholder='0000'
            required
          ></IonInput>

          <IonLabel>
            <p>w/m2.</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </IonCol>
  );
};

export default RadiationActMode;
