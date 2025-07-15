import {
  EngineRoutingSchemaType,
} from 'webitel-sdk';

export default {
  // describes Webitel system entities
  objects: {
    flow: {
      type: {
        [EngineRoutingSchemaType.Chat]: 'Chat',
        [EngineRoutingSchemaType.Voice]: 'Voz',
        [EngineRoutingSchemaType.Service]: 'Servicio',
        [EngineRoutingSchemaType.Processing]: 'Formularios',
        [EngineRoutingSchemaType.Default]: 'Sin tipo',
      },
    },
  },
};