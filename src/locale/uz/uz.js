import { EngineRoutingSchemaType } from 'webitel-sdk';

export default {
  objects: {
    flow: {
      type: {
        [EngineRoutingSchemaType.Chat]: 'Chat',
        [EngineRoutingSchemaType.Voice]: 'Ovoz',
        [EngineRoutingSchemaType.Service]: 'Xizmat',
        [EngineRoutingSchemaType.Processing]: 'Formalar',
        [EngineRoutingSchemaType.Default]: 'Turi yo‘q',
      },
    },
  },
};

