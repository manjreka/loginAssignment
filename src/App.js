import {Switch, Route} from 'react-router-dom'

import Login from './Components/Login'
import NotFound from './Components/NotFound'

import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/ebank/login" component={Login} />
    <Route path="not-found" component={NotFound} />
  </Switch>
)

export default App
