import React, { useState, useEffect } from 'react';
import {
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonList,
  IonListHeader,
} from '@ionic/react';

const ExternalActMode: React.FC = () => {


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
          Inicio
          <p>Tiempo desde la activación del riego hasta que se inicia</p>
        </IonLabel>

        <IonItem class='ion-no-padding ion-margin-bottom'>
          <IonInput
            type='number'
            inputMode='numeric'
            max='999'
            min='0'
            name='minRadiation'
            placeholder='000'
            required
          ></IonInput>

          <IonLabel>
            <p>seg.</p>
          </IonLabel>
        </IonItem>

        <IonLabel>
          Pausa
          <p>Tiempo entre riegos si la activación sigue vigente</p>
        </IonLabel>

        <IonItem class='ion-no-padding  ion-margin-bottom'>
          <IonInput
            type='number'
            inputMode='numeric'
            max='999'
            min='0'
            name='minRadiation'
            placeholder='000'
            required
          ></IonInput>
          <IonLabel>
            <p>seg.</p>
          </IonLabel>
        </IonItem>
      </IonList>
    </IonCol>
  );
};

export default ExternalActMode;
