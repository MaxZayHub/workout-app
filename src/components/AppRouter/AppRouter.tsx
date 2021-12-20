import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { routes } from '../../utils/routes'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'
import { Styles } from './AppRouter.styles'

const AppRouter = () => {
  return (
    <>
      <Styles.ThemeSwitchWrapper>
        <ThemeSwitch />
      </Styles.ThemeSwitchWrapper>
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
    </>
  )
}

export default AppRouter
