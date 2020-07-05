import React from 'react';
import {
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonList,
  IonListHeader,
} from '@ionic/react';

import { INSTALLATION_CONFIG }from '../../data/dummy-data'
const humidityNumber = INSTALLATION_CONFIG.humidity_sensors

const HumidityActMode: React.FC = () => {


  return (
    <IonCol>
      <IonList>
        <IonListHeader class='ion-no-padding  ion-margin-bottom'>
          <IonLabel>Configuración adicional</IonLabel>
        </IonListHeader>

        <IonLabel>
          Medidor de humedad
            <p>{humidityNumber} medidores disponibles, numerados del 1 al {humidityNumber}</p>
        </IonLabel>

        <IonItem class='ion-no-padding  ion-margin-bottom'>
            <IonLabel>Medidor de humedad:</IonLabel>
          <IonInput
            enterkeyhint="enter"
            type='number'
            inputMode='numeric'
            max='8'
            min='0'
            name='humiditySensor'
            placeholder='1'
            required
          ></IonInput>
        </IonItem>

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
          Humedad del suelo mínima
          <p>Por debajo de este valor, el programa no se iniciará</p>
        </IonLabel>

        <IonItem class='ion-no-padding  ion-margin-bottom'>
          <IonInput
            type='number'
            inputMode='numeric'
            max='99'
            min='0'
            name='minHumidity'
            placeholder='0'
            required
          ></IonInput>
          <IonLabel>
            <p>%</p>
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

export default HumidityActMode;
