
import {
    CONNECTION_CHANGE,
    CONNECTION_SOCKEET,
    ConnectionActionType
} from './type'

export function connectionChange(isConnected: boolean){
return {
    type:CONNECTION_CHANGE,
    connected: isConnected,
    isError: false
};
}

export function connectSockt(){
    return{
        type: CONNECTION_SOCKEET
    };
}