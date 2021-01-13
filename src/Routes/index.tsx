import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import DashBoard from '../pages/dashboard'

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <Route component={DashBoard} path='/' exact/>
    </BrowserRouter>
  )
}

export default Routes
