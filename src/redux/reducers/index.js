import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import arbitros from './arbitros';
import equipos from './equipos';
import jugadores from './jugadores';
import responsables from './responsables';
import torneos from './torneos';

const rootReducer = (history) => combineReducers({ 
    arbitros: arbitros,
    equipos: equipos,
    jugadores: jugadores,
    responsables: responsables,
    torneos: torneos,
    router: connectRouter(history),
})

export default rootReducer;