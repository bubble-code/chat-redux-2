
export const CONNECTION_CHANGE = 'CONNECTION_CHANGE';
export const CONNECTION_SOCKEET = 'CONNECTION_SOCKEET';

interface Connection{
    type: typeof CONNECTION_SOCKEET; 
}
interface Connection_Change{
    type: typeof CONNECTION_CHANGE;
    connected: boolean;
    isError: boolean;
}

export type ConnectionActionType = Connection | Connection_Change;