import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Maps from './Maps'
import Charts from './Charts'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Maps' component={Maps}/>
      <Route path='/Charts' component={Charts}/>
    </Switch>
  </main>
)

export default Main