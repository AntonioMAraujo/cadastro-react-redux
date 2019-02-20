export default function clientes(state = [], action){
    switch(action.type){
        case 'ADD_CLIENTE':
            return [ ...state, action.payload];
        case 'REMOVE_CLIENTE':
            var index = state.indexOf(action.payload);
            console.log(index);
            var lista = state;
            if (index > -1) {
                lista.splice(index, 1);
            }
            return [...lista];
        default: 
            return state;    
    }
}