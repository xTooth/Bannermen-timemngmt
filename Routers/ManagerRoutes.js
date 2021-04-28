import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import CreateShifts from '../Scenes/CreateShifts.js'
import AcceptApplications from '../Scenes/AcceptApplications.js'

const ManagerRoutes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "CreateShifts" component = {CreateShifts} title = "Create Shifts"/>
         <Scene key = "AcceptApplications" component = {AcceptApplications} title = "Accept Applications" initial = {true}/>
      </Scene>
   </Router>
)
export default ManagerRoutes