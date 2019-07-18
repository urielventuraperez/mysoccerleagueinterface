import React from 'react'
import { Route, Switch } from 'react-router'
import Torneos from '../pages/torneos'
import Login from '../pages/login'
import Home from '../pages/home'
import EquiposTorneo from '../pages/equiposTorneo'
import EstadisticasEquipo from '../pages/estadisticasEquipo'
import Administracion from '../pages/administracion'
import Responsables from '../pages/responsables'
import AgregarEquipo from '../pages/agregarEquipo'
import AdministracionTorneoArbitros from '../pages/administracionTorneoArbitros'
import AdministracionTorneoEquipos from '../pages/administracionTorneoEquipos'

const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/torneos" component={Torneos} />
      <Route path="/responsables" component={Responsables} />
      <Route path="/torneo/:torneoId/equipos" component={EquiposTorneo} />
      <Route path="/estadisticas/equipo/:equipoId" component={EstadisticasEquipo} />
      <Route path="/administracion" component={Administracion} />
      <Route path='/torneo/:torneoId/agregarEquipo' component={AgregarEquipo} />
      <Route path='/administrar/torneo/arbitros/:torneoId' component={AdministracionTorneoArbitros} />
      <Route path='/administrar/torneo/equipos/:torneoId' component={AdministracionTorneoEquipos} />
    </Switch>
)

export default routes