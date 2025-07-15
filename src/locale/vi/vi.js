import { EngineRoutingSchemaType } from 'webitel-sdk';

export default {
  objects: {
    flow: {
      type: {
        [EngineRoutingSchemaType.Chat]: 'Trò chuyện',
        [EngineRoutingSchemaType.Voice]: 'Thoại',
        [EngineRoutingSchemaType.Service]: 'Dịch vụ',
        [EngineRoutingSchemaType.Processing]: 'Biểu mẫu',
        [EngineRoutingSchemaType.Default]: 'Không có loại',
      },
    },
  },
};

