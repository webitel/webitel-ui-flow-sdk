import {
  EngineRoutingSchemaType,
} from 'webitel-sdk';

export default {
  // describes Webitel system entities
  objects: {
    flow: {
      type: {
        [EngineRoutingSchemaType.Chat]: 'Chat',
        [EngineRoutingSchemaType.Voice]: 'Voice',
        [EngineRoutingSchemaType.Service]: 'Service',
        [EngineRoutingSchemaType.Processing]: 'Forms',
        [EngineRoutingSchemaType.Default]: 'Default',
      },
    },
  },
};
