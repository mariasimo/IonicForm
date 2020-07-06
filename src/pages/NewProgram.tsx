import React from 'react';
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonText,
  IonItem,
  IonList,
  IonListHeader,
  IonLabel,
  IonInput,
  IonTextarea,
  IonDatetime,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

const NewProgram: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='primary'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/' />
          </IonButtons>
          <IonTitle>Nutritec</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class='ion-padding'>
        <IonText class='ion-margin-bottom'>
          <h2>Nuevo Programa</h2>
        </IonText>

        <IonList inset={true} lines="full">
          <IonItem>
            Hey
          </IonItem>
          <IonItem>
            Hey
          </IonItem>
        </IonList>
   
        {/* <IonList class="ion-margin-bottom">
            <h3>Datos básicos</h3>
            <p>Añade alguna información de aplicación general sobre este programa</p>
          <IonItem  class="ion-margin-bottom">
            <IonLabel position="stacked">
              Nombre (opcional)
            </IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem  class="ion-margin-bottom">
            <IonLabel position="stacked">
              Descripción (opcional)
            </IonLabel>
            <IonTextarea></IonTextarea>
          </IonItem>
          <IonItem  class="ion-margin-bottom">
            <IonLabel position="stacked">
              Horario
              <p>El riego no se producirá fuera de este horario</p>
            </IonLabel>
            <IonGrid>
              <IonRow>
                <IonCol>
                    <IonItem>
                      <IonDatetime
                        displayFormat='HH:mm'
                        placeholder='00:00'
                        cancelText='Cancelar'
                        doneText='Confirmar'
                      />
                    </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonItem>
        </IonList> */}

        {/* <IonCard class='ion-no-margin ion-margin-bottom'>
          <IonCardHeader>
            <IonCardTitle>Tipo de inicio</IonCardTitle>
            <p>Elige los parámetros para poner en marcha el programa</p>
          </IonCardHeader>
          <IonCardContent>
            <IonButton>Completar</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard class='ion-no-margin ion-margin-bottom'>
          <IonCardHeader>
            <IonCardTitle>Válvulas</IonCardTitle>
            <p>
              Configura el comportamiento de las válvulas para este programa
            </p>
          </IonCardHeader>
          <IonCardContent>
            <IonButton>Completar</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard class='ion-no-margin ion-margin-bottom'>
          <IonCardHeader>
            <IonCardTitle>Motores</IonCardTitle>
            <p>Configura el comportamiento de los motores para este programa</p>
          </IonCardHeader>
          <IonCardContent>
            <IonButton>Completar</IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard class='ion-no-margin ion-margin-bottom'>
          <IonCardHeader>
            <IonCardTitle>Fertilización</IonCardTitle>
            <p>Elige los parámetros de fertilización</p>
          </IonCardHeader>
          <IonCardContent>
            <IonButton>Completar</IonButton>
          </IonCardContent>
        </IonCard> */}
      </IonContent>
    </IonPage>
  );
};

export default NewProgram;
