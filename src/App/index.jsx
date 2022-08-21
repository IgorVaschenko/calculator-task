import React, { lazy, Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  LIGHT_THEME,
  HOME_PAGE_ROUTE_CLASS,
} from '@/constants'
import Loader from '@/components/Loader'
import ErrorBoundary from '@/containers/ErrorBoundary'

import GlobalStyles from '@/globalStyles'
import lightTheme from '@/themes/lightTheme'
import darkTheme from '@/themes/darkTheme'


const HomePage = lazy(() => import('@/pages/Home'))
const HomePageClass = lazy(() => import('@/pages/HomeClass'))
const SettingsPage = lazy(() => import('@/pages/Settings'))


export default () => {

  const themeValue = useSelector(state => state.themes.theme)
  const themeSelector = themeValue === LIGHT_THEME ? lightTheme : darkTheme

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeSelector}>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route
                exact
                path={HOME_PAGE_ROUTE}
                component={HomePage}
              />
              <Route
                exact
                path={HOME_PAGE_ROUTE_CLASS}
                component={HomePageClass}
              />
              <Route
                exact
                path={SETTINGS_PAGE_ROUTE}
                component={SettingsPage}
              />
            </Switch>
          </Suspense>
          <GlobalStyles />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  )
}
