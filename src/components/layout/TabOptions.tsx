import React from 'react';
import {
  IonTabBar,
  IonIcon,
  IonLabel,
  IonTabButton
} from '@ionic/react';
import { statsChart, settingsSharp, addCircleSharp, appsSharp } from 'ionicons/icons'

const TabOptions: React.FC = _ => (
  <>
          <IonTabButton tab='programs' href="/">
            <IonIcon icon={appsSharp} />
            <IonLabel>Programas</IonLabel>
          </IonTabButton>

          <IonTabButton tab='new-program' href="/nuevo-programa">
            <IonIcon icon={addCircleSharp} />
            <IonLabel>Crear programa</IonLabel>
          </IonTabButton>

          <IonTabButton tab='stats' disabled={true}>
            <IonIcon icon={statsChart} />
            <IonLabel>Estado</IonLabel>
          </IonTabButton>

          <IonTabButton tab='configuration' disabled={true}>
            <IonIcon icon={settingsSharp} />
            <IonLabel>Configuración</IonLabel>
          </IonTabButton>
        </>
)

export default TabOptions;