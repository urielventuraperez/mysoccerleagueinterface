import { combineReducers } from 'redux';
import arbitros from './arbitros';
import equipos from './equipos';
import jugadores from './jugadores';
import responsables from './responsables';

export default combineReducers({ 
    arbitros,
    equipos,
    jugadores,
    responsables
})