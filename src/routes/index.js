import React from 'react'
import { Route, Switch } from 'react-router'
import Torneos from '../pages/torneos'
import Login from '../pages/login'
import Home from '../pages/home'
import EquiposTorneo from '../pages/equiposTorneo'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login}></Route>
      <Route path="/torneos" component={Torneos} />
      <Route path="/torneo/:torneoId/equipos" component={EquiposTorneo} />
    </Switch>
  </div>
)

export default routes