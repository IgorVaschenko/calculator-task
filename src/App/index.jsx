import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HOME_PAGE_ROUTE } from '@/constants'

import Loader from '@/components/Loader'
import Calculator from '@/components/Calculator'

const HomePage = lazy(() => import('@/pages/Home'))

export default () => (
  <>
    <Calculator />
    {/* <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          exact
          path={HOME_PAGE_ROUTE}
          component={HomePage}
        />
      </Switch>
    </Suspense> */}
  </>
)
