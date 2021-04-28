import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import AvailableShifts from '../Scenes/AvailableShifts.js'
import AcceptedShifts from '../Scenes/AcceptedShifts.js'

const UserRoutes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "AvailableShifts" component = {AvailableShifts} title = "Available Shifts" initial = {true}/>
         <Scene key = "AcceptedShifts" component = {AcceptedShifts} title = "Accepted Shifts" />
      </Scene>
   </Router>
)
export default UserRoutes