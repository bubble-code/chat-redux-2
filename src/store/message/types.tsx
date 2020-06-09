
export const SEND_MESSAGE_RESPONSE = 'SEND_MESSAGE_RESPONSE';
export const MESSAGE_SENT = 'MESSAGE_SENT';
export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';
export const USER_CHANGED = 'USER_CHANGED';

export interface Message {
    from: string;
    content: string;
    time: string;
}
export interface Username {
    username: string;
}
export interface ChatState {
    message: Message[];
    username: Username;
}

interface MessageReceived {
    type: typeof SEND_MESSAGE_RESPONSE;
    payload: Message;
}
interface SendMessage {
    type: typeof SEND_MESSAGE_REQUEST;
    payload: Message;
}
interface MessageSent {
    type: typeof MESSAGE_SENT;
}
interface ChangeUsername {
    type: typeof USER_CHANGED;
    payload: Username;
}

export type MessageActionTypes = MessageReceived | SendMessage | MessageSent | ChangeUsername ;
