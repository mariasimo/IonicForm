import React, {useState} from 'react'
import {
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonText,
    IonSelect,
    IonSelectOption
  } from '@ionic/react';

import TimeActivationMode from './TimeActivationMode';
import AfterProgramMode from './AfterProgramMode';
import ExternalActMode from './ExternalActMode';
import RadiationActMode from './RadiationActMode';
import HumidityActMode from './HumidityActMode';

const StartModeManager: React.FC  = () => {
   /* //* Tipo_inicio 00-90
         - 00 no inicio
         - 01-29 fin programa
         - 30 act. horaria
         - 41-47* act. externa (depende de configuración)
         - 70 radiacion solar
         - 81-88* medidor suelo
      //*
   */

    const startModeOptions = [
        { id: 1, label: 'Activación horaria'},
        { id: 2, label: 'Tras otro programa'},
        { id: 3, label: 'Activación externa'},
        { id: 4, label: 'Por radiación solar'},
        { id: 5, label: 'Por humedad del suelo'}
    ];

    interface IStartMode {
        id: number;
        label: string;
    }
    type StartMode = typeof startModeOptions[number];

    const compareWith = (o1: StartMode, o2: StartMode) => {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    };

    const [selectedStartMode, setSelectedStartMode] = useState<
        IStartMode | undefined
    >(undefined);

    return(
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonText color='primary'>
                <h2>Inicio</h2>
              </IonText>
              <p>
                Configura los parámetros para arrancar el programa.{' '}
                <a href='#'>Saber más</a>
              </p>

              <IonItem class='ion-no-padding'>
                <IonLabel position="floating">
                  Selecciona un tipo de inicio
                </IonLabel>
                <IonSelect
                  mode='ios'
                  compareWith={compareWith}
                  value={selectedStartMode}
                  onIonChange={(e) => {
                    setSelectedStartMode(e.detail.value);
                  }}
                  okText='Aceptar'
                  cancelText='Cancelar'
                >
                  {startModeOptions.map((option) => (
                    <IonSelectOption key={option.id} value={option}>
                      {option.label}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>

          {selectedStartMode && (
            <IonRow>
              {selectedStartMode.id === 1 && <TimeActivationMode/>}
              {selectedStartMode.id === 2 && <AfterProgramMode/>}
              {selectedStartMode.id === 3 && <ExternalActMode/>}
              {selectedStartMode.id === 4 && <RadiationActMode/>}
              {selectedStartMode.id === 5 && <HumidityActMode/>}
            </IonRow>
          )}
        </IonGrid>
    )
}

export default StartModeManager;