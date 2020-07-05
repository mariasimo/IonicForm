
export const CREATED_PROGRAMS = [
  {
    id: 1,
    title: 'Programa humedad',
    startmode: 0,
  },
  {
    id: 2,
    title: '',
    startmode: 30,
  },
  {
    id: 3,
    title: '',
    startmode: 10,
  },
  {
    id: 4,
    title: 'Programa test',
    startmode: 42,
  },
  {
    id: 5,
    title: 'Titulo programa',
    startmode: 82,
  },
];

interface InstallConfig {
  max_programs: number; //it doesnt exists in the system 
  humidity_sensors: number;
  activation_sensors: number;
}

export const INSTALLATION_CONFIG: InstallConfig = {
  max_programs: 30,
  humidity_sensors: 8,
  activation_sensors: 8,
};


//  Tipos de inicio
//  ·  00 no inicio
//  ·  01-29 fin programa
//  ·  30 act. horaria
//  ·  41-47* act. externa (editable en configuración)
//  ·  70 radiacion solar
//  ·  81-88* medidor suelo (editable en configuración)


export interface IStartMode {
  max: number;
  min: number;
  str: string;
}

export const STARTMODES: IStartMode[] = [
  {
    min: 0,
    max: 0,
    str: 'Desactivado'
  },
  {
    min: 1,
    max: 29,
    str: 'Tras otro programa'
  },
  {
    min: 30,
    max: 30,
    str: 'Activación horaria'
  },
  {
    min: 41,
    max: 47,
    str: 'Activación externa'
  },
  {
    min: 70,
    max: 70,
    str: 'Por radiación solar'
  },
  {
    min: 81,
    max: 88,
    str: 'Por humedad del suelo'
  }
]
