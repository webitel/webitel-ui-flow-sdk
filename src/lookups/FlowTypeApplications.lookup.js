import { EngineRoutingSchemaType } from 'webitel-sdk';
import FlowApp from '../enums/FlowApp.enum';

// https://docs.webitel.com/display/WDEV/Flow+type
const general = [
  FlowApp.IF,
  FlowApp.SWITCH,
  FlowApp.FUNCTION,
  FlowApp.EXECUTE,
  FlowApp.CALENDAR,
  FlowApp.SET_VARIABLES,
  FlowApp.EXPORT_VARIABLES,
  FlowApp.UN_SET_VARIABLES,
  FlowApp.HTTP_REQUEST,
  FlowApp.JS,
  FlowApp.MATH,
  FlowApp.MONO_PAY,
  FlowApp.STRING,
  FlowApp.USER_INFO,
  FlowApp.SCHEMA,
  FlowApp.SOFT_SLEEP,
  // FlowApp.SQL,
  FlowApp.LIST,
  FlowApp.LIST_ADD,
  FlowApp.LOG,
  FlowApp.SEND_EMAIL,
  FlowApp.SEND_TTS,
  FlowApp.SEND_MESSAGE,
  FlowApp.GOTO,
  FlowApp.BROADCAST_CHAT_MESSAGE,
  FlowApp.GET_EMAIL,
  FlowApp.GET_QUEUE_AGENTS,
  // FlowApp.GET_QUEUE_METRICS,
  FlowApp.MEMBER_INFO,
  FlowApp.PATCH_MEMBERS,
  FlowApp.CALLBACK_QUEUE,
  FlowApp.WHILE,
];

const FlowTypeApplications = Object.freeze({
  [EngineRoutingSchemaType.Voice]: [
    ...general,
    FlowApp.TRIGGER,
    FlowApp.MARK_IVR,
    FlowApp.SET_GRANTEE,
    FlowApp.CLASSIFIER,
    FlowApp.RING_READY,
    FlowApp.PRE_ANSWER,
    FlowApp.ANSWER,
    FlowApp.SIP_REDIRECT,
    FlowApp.RINGBACK,
    FlowApp.UPDATE_CID,
    FlowApp.PARK,
    FlowApp.CONFERENCE,
    FlowApp.BRIDGE,
    FlowApp.HANGUP,
    FlowApp.IN_BAND_DTMF,
    FlowApp.FLUSH_DTMF,
    FlowApp.PLAYBACK,
    FlowApp.RECORD_FILE,
    FlowApp.RECORD_SESSION,
    FlowApp.GENERATE_LINK,
    FlowApp.TTS,
    FlowApp.JOIN_QUEUE,
    FlowApp.JOIN_AGENT,
    // FlowApp.CC_POSITION,
    // FlowApp.AWT,
    // FlowApp.LAST_BRIDGED,
  ],
  [EngineRoutingSchemaType.Chat]: [
    ...general,
    FlowApp.TRIGGER,
    FlowApp.MENU,
    FlowApp.RECV_MESSAGE,
    FlowApp.SEND_TEXT,
    FlowApp.SEND_FILE,
    FlowApp.GENERATE_LINK,
    FlowApp.CLASSIFIER,
    FlowApp.JOIN_QUEUE,
    FlowApp.JOIN_AGENT,
    FlowApp.CHAT_HISTORY,
    // FlowApp.CC_POSITION,
    // FlowApp.AWT,

  ],
  [EngineRoutingSchemaType.Processing]: [
    ...general,
    FlowApp.FORM_TEXTFIELD,
    FlowApp.FORM_SELECT,
    FlowApp.FORM_TEXT,
    FlowApp.FORM_DATETIME_PICKER,
    FlowApp.FORM_RICH_TEXT_EDITOR,
    FlowApp.FORM_FILE,
    FlowApp.GENERATE_FORM,
    FlowApp.ATTEMPT_RESULT,
  ],
  [EngineRoutingSchemaType.Service]: [
    ...general,
    // FlowApp.AWT,
    // FlowApp.CONFIRM,
    // FlowApp.CANCEL,
    // FlowApp.ABANDONED,
    FlowApp.ATTEMPT_RESULT,
  ],
  [EngineRoutingSchemaType.Default]: Object.values(FlowApp),
});

export default FlowTypeApplications;
