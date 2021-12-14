import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { routes } from '../../utils/routes'

const AppRouter = () => {
  return (
    <Switch>
      {routes.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          component={item.Component}
          exact={true}
        />
      ))}
      <Redirect to={'/main'} />
    </Switch>
  )
}

export default AppRouter
