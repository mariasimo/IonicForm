import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import {
  IonApp,
  IonRouterOutlet,
  IonTabBar,
  IonTabs,
  IonIcon, 
  IonLabel,
  IonTabButton
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//Icons
import { map, informationCircle, personCircle, calendar, listOutline, addCircleOutline, duplicateOutline, statsChart, settingsSharp, addCircleSharp, albumsSharp, appsSharp } from 'ionicons/icons'
// Pages
import NewProgram from './pages/NewProgram';
import Programs from './pages/Programs';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>

      <IonRouterOutlet>
        <Route path='/nuevo-programa'>
          <NewProgram />
        </Route>
        <Route path='/' exact>
          <Programs />
        </Route>
        <Redirect to="/"/>
      </IonRouterOutlet>

        <IonTabBar slot='bottom'>
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
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
