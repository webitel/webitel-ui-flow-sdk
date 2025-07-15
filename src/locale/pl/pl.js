import { EngineRoutingSchemaType } from 'webitel-sdk';

export default {
  objects: {
    flow: {
      type: {
        [EngineRoutingSchemaType.Chat]: 'Czat',
        [EngineRoutingSchemaType.Voice]: 'Głos',
        [EngineRoutingSchemaType.Service]: 'Serwis',
        [EngineRoutingSchemaType.Processing]: 'Formularze',
        [EngineRoutingSchemaType.Default]: 'Brak typu',
      },
    },
  },
};
