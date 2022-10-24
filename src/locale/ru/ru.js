import { EngineRoutingSchemaType } from 'webitel-sdk';

export default {
  objects: {
    flow: {
      type: {
        [EngineRoutingSchemaType.Chat]: 'Текстовая',
        [EngineRoutingSchemaType.Voice]: 'Голосовая',
        [EngineRoutingSchemaType.Service]: 'Служебная',
        [EngineRoutingSchemaType.Processing]: 'Формы',
        [EngineRoutingSchemaType.Default]: 'Нет типа',
      },
    },
  },
};
