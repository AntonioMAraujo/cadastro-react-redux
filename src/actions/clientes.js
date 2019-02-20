export function addCliente(cliente){
    return {
        type: 'ADD_CLIENTE',
        payload: cliente
    };
}

export function removeCliente(cliente){
    return {
        type: 'REMOVE_CLIENTE',
        payload: cliente
    }
}