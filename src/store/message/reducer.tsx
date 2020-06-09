import { ChatState, MessageActionTypes, USER_CHANGED, SEND_MESSAGE_RESPONSE, MESSAGE_SENT } from './types'

const initialState: ChatState = {
    message: [],
    username: { username: '' }
};

export function nessageReducer(state = initialState, action: MessageActionTypes)
    : ChatState {
    switch (action.type) {
        case USER_CHANGED:
            return Object.assign({}, state, { username: { username: action.payload } });
        case SEND_MESSAGE_RESPONSE:
            const isMessgeTypeSent = (action.payload.from === state.username.username);
            action.payload = Object.assign(action.payload,
                { type: isMessgeTypeSent ? 'sent' : 'received' });
            return {
                ...state,
                message: [...state.message, action.payload]
            };
        case MESSAGE_SENT:
        default:
            return state;
    }
}