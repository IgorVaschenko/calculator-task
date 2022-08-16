import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME_PAGE_ROUTE,
  SETTINGS_PAGE_ROUTE,
  LIGHT_THEME,
  DARK_THEME,
  HOME_PAGE_ROUTE_CLASS
} from '@/constants'

import { ThemeProvider } from 'styled-components'

import Loader from '@/components/Loader'

import theme from '@/theme'
import lightTheme from '@/themes/lightTheme'
import darkTheme from '@/themes/darkTheme'

import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from '@/globalStyles'


import { useSelector } from 'react-redux'
import ErrorBoundary from '@/ErrorBoundary'


const HomePage = lazy(() => import('@/pages/Home'))
const HomePageClass = lazy(() => import('@/pages/HomeClass'))
const SettingsPage = lazy(() => import('@/pages/Settings'))


export default () => {
  const themeValue = useSelector(state => state.themes.theme)

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeValue === LIGHT_THEME ? lightTheme : darkTheme}>
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
