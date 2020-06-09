
import {
    Message,
    Username,
    SEND_MESSAGE_RESPONSE,
    SEND_MESSAGE_REQUEST,
    MESSAGE_SENT,
    USER_CHANGED
} from './types'

export function messageReceived(message: Message){
    return { type: SEND_MESSAGE_RESPONSE, payload: message};
}
export function sendMessage(message: Message){
    return {type: SEND_MESSAGE_REQUEST, payload: message};
}
export function messageSent(){
    return { type: MESSAGE_SENT};
}
export function changeUsername(username: Username){
    return {type: USER_CHANGED, username: username};
}