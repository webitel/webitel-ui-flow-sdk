import { EngineRoutingSchemaType } from 'webitel-sdk';

export default {
  objects: {
    flow: {
      type: {
        [EngineRoutingSchemaType.Chat]: 'Чат',
        [EngineRoutingSchemaType.Voice]: 'Дауыс',
        [EngineRoutingSchemaType.Service]: 'Қызмет',
        [EngineRoutingSchemaType.Processing]: 'Формалар',
        [EngineRoutingSchemaType.Default]: 'Түрі жоқ',
      },
    },
  },
};

