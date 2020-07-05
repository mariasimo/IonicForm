import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonCardContent,
  IonCardSubtitle,
  IonText,
  IonGrid,
  IonRow
} from '@ionic/react';

import { CREATED_PROGRAMS, INSTALLATION_CONFIG, STARTMODES, IStartMode } from '../data/dummy-data';

// Save this fn in a "utils" folder
const startModeToStr = (startMode: number, STARTMODES: IStartMode[]) => {
    return STARTMODES.map((el) => {
        console.log(el, startMode)
        if (startMode === el.min || (startMode > el.min && startMode < el.max)) {
            console.log(el.str)
            return el.str
        }
        return null
    })
}

const NewProgram: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonTitle>Nutritec</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <h2>Programas</h2>
        <p>
          {CREATED_PROGRAMS.length} programas creados.{' '}
          {INSTALLATION_CONFIG.max_programs - CREATED_PROGRAMS.length}/
          {INSTALLATION_CONFIG.max_programs} espacios disponibles
        </p>

        {CREATED_PROGRAMS.map((program, idx) => (
          <IonCard key={program.id} class='ion-no-margin ion-margin-bottom'>
            <IonCardHeader>
              <IonCardTitle>{`Programa #${program.id}`}</IonCardTitle>
              {program.title && (
                <IonCardSubtitle>{program.title}</IonCardSubtitle>
              )}
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                  <IonRow>
                  <p>Tipo de inicio: {startModeToStr(program.startmode, STARTMODES)}</p>
                  </IonRow>
              </IonGrid>
              <IonButton size='small'>Editar</IonButton>
              <IonButton fill='outline' size='small'>
                Borrar
              </IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default NewProgram;
