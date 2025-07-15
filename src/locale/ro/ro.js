import {
  EngineRoutingSchemaType,
} from 'webitel-sdk';

export default {
  // describes Webitel system entities
  objects: {
    flow: {
      type: {
        [EngineRoutingSchemaType.Chat]: 'Chat',
        [EngineRoutingSchemaType.Voice]: 'Voce',
        [EngineRoutingSchemaType.Service]: 'Serviciu',
        [EngineRoutingSchemaType.Processing]: 'Formulare',
        [EngineRoutingSchemaType.Default]: 'Fără tip',
      },
    },
  },
};