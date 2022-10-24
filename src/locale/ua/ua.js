import { EngineRoutingSchemaType } from 'webitel-sdk';

export default {
  objects: {
    flow: {
      type: {
        [EngineRoutingSchemaType.Chat]: 'Текстова',
        [EngineRoutingSchemaType.Voice]: 'Голосова',
        [EngineRoutingSchemaType.Service]: 'Службова',
        [EngineRoutingSchemaType.Processing]: 'Форми',
        [EngineRoutingSchemaType.Default]: 'Без типу',
      },
    },
  },
};
