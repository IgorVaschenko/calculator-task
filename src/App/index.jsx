import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE } from '@/constants'

import Loader from '@/components/Loader'
import CalcAndHistory from '@/components/Calculator'
import WrapperPage from '@/components/WrapperPage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const HomePage = lazy(() => import('@/pages/Home'))
const SettingsPage = lazy(() => import('@/pages/Settings'))

export default () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route
        exact
        path={HOME_PAGE_ROUTE}
        component={HomePage}
      />
      <Route
        exact
        path={SETTINGS_PAGE_ROUTE}
        component={SettingsPage}
      />
    </Switch>
  </Suspense>
)
