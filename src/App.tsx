import React, { useState, useEffect } from 'react';
import {
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
  IonSelect,
  IonSelectOption,
  IonDatetime,
  IonList,
  IonListHeader,
  IonInput,
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

const App: React.FC = () => {
  const startModeOptions = [
    {
      id: 1,
      label: 'Activación horaria',
    },
    {
      id: 2,
      label: 'Tras otro programa',
    },
    {
      id: 3,
      label: 'Activación externa',
    },
    {
      id: 4,
      label: 'Por radiación solar',
    },
    {
      id: 5,
      label: 'Por humedad del suelo',
    },
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

  const listOfCreatedPrograms = [
    {
      id: 1,
      title: 'Programa humedad',
    },
    {
      id: 2,
      title: '',
    },
    {
      id: 3,
      title: '',
    },
    {
      id: 4,
      title: 'Programa test',
    },
    {
      id: 5,
      title: 'Titulo programa',
    },
  ];

  interface IProgram {
    id: number;
    title: string;
  }
  type Program = typeof listOfCreatedPrograms[number];

  const compareWithPrograms = (o1: Program, o2: Program) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  const [afterProgram, setAfterProgram] = useState<IProgram | undefined>(
    undefined
  );

   const initHour = '09:00';
   const [timesheets, setTimesheet] = useState<string[]>([initHour]);
   const [removeSlot, setRemoveSlot] = useState<number | null>(null);
   const maxSize = 24;

   const addSlotToTimesheet = () => {
      console.log(timesheets)
      if (timesheets.length < maxSize) {
         setTimesheet([...timesheets, initHour]);
      }
   };
   
   const saveHourInTimesheet = (value: string, idx: number) => {
      if(removeSlot) return
      console.log(value)
      // console.log(value, timesheets[idx])
      // if(value === timesheets[idx]) return
      console.log('save fn was called')

      const newTimesheets = [...timesheets].map((el, elIdx) => elIdx === idx ? value : el)
      setTimesheet([...newTimesheets])

      setRemoveSlot(null)
   };

   useEffect(() =>{
      if(typeof removeSlot === "number") {
         const newTimesheets = [...timesheets]
         newTimesheets.splice(removeSlot, 1)
         setTimesheet(newTimesheets)
         setRemoveSlot(null)
      } 
   }, [removeSlot, timesheets])

   useEffect(() => console.log(timesheets), [timesheets])

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Nutritec</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class='ion-padding'>
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
              {/* <IonCol size='12'>
                <IonItem
                  class='ion-no-padding'
                  detail
                  detailIcon={settingsOutline}
                  lines='none'
                >
                  <IonLabel>Configuración adicional:</IonLabel>
                </IonItem>
              </IonCol> */}

              {/* Activation by hours */}
              {selectedStartMode.id === 1 && (
                <>
                  {timesheets && (
                    <IonCol size='12'>
                      <IonList>
                        <IonListHeader class='ion-no-padding'>
                          <IonLabel>
                             Añade una hora de inicio
                              <p>{24 - timesheets.length}/24 espacios disponibles</p>
                           </IonLabel>
                        </IonListHeader>


                        {timesheets.map((slot, idx) => (
                          <IonItem key={idx} class='ion-no-padding'>
                            <IonLabel>
                        <h3>Hora</h3>
                            </IonLabel>
                            <IonDatetime
                              displayFormat='HH:mm'
                              value={slot}
                              placeholder={slot}
                              cancelText="Cancelar"
                              doneText="Confirmar"
                              onIonChange={(e: CustomEvent)=> saveHourInTimesheet(e.detail.value, idx)}
                            />

                            <IonButton fill='outline' slot='end'
                              onClick={()=>setRemoveSlot(idx)}
                            >
                              Borrar
                            </IonButton>
                          </IonItem>
                        ))}
                      </IonList>
                    </IonCol>
                  )}
                  <IonCol>
                    <IonButton
                      fill='outline'
                      color='medium'
                      onClick={() => addSlotToTimesheet()}
                    >
                      Añadir hora de inicio
                    </IonButton>
                  </IonCol>
                </>
              )}

              {/* After program configuration */}
              {selectedStartMode.id === 2 && (
                <IonCol>
                  <IonList>
                     <IonListHeader class='ion-no-padding'>
                        <IonLabel>
                           Iniciar tras el programa...
                        </IonLabel>
                     </IonListHeader>
                     <IonItem class="ion-no-padding">
                     <IonLabel position="floating">Elige un programa </IonLabel>
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
                        {listOfCreatedPrograms.map((option) => (
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
              )}


               {/* External activation configuration */}
               {selectedStartMode.id === 3 && (
                <IonCol>
                  <IonList>
                     <IonListHeader class='ion-no-padding  ion-margin-bottom'>
                        <IonLabel>
                           Configuración adicional
                        </IonLabel>
                     </IonListHeader>
                     
                     <IonLabel>
                        Radiación solar mínima
                        <p>Por debajo de este valor, el programa no se iniciará</p>
                     </IonLabel>

                     <IonItem class="ion-no-padding  ion-margin-bottom">
                        <IonInput 
                           type="number" 
                           inputMode="numeric"
                           max="2000"
                           min="0"
                           name="minRadiation"
                           placeholder="2000"
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

                     <IonItem class="ion-no-padding ion-margin-bottom">
                        <IonInput 
                           type="number" 
                           inputMode="numeric"
                           max="999"
                           min="0"
                           name="minRadiation"
                           placeholder="000"
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

                     <IonItem class="ion-no-padding  ion-margin-bottom">
                        <IonInput 
                           type="number" 
                           inputMode="numeric"
                           max="999"
                           min="0"
                           name="minRadiation"
                           placeholder="000"
                           required
                        ></IonInput>
                        <IonLabel>
                        <p>seg.</p>
                        </IonLabel>
                     </IonItem>

                  </IonList>
                </IonCol>
              )}

            </IonRow>
          )}


          {/* Result */}
          <IonRow>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default App;
