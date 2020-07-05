import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/react';

const NewProgram: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nutritec</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h2>Nuevo Programa</h2>
      </IonContent>
    </IonPage>
  );
};

export default NewProgram