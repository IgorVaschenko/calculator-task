import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { HOME_PAGE_ROUTE } from '@/constants'

import Loader from '@/components/Loader'
import Calculator from '@/components/Calculator'
import WrapperPage from '@/components/WrapperPage'
import Header from '@/components/Header'
import History from '@/components/History'
import Footer from '@/components/Footer'

const HomePage = lazy(() => import('@/pages/Home'))

export default () => (
  <WrapperPage>
    <Header />
    <Calculator />
    <History />
    <Footer />
  </WrapperPage>
)

{/* <Suspense fallback={<Loader />}>
  <Switch>
    <Route
      exact
      path={HOME_PAGE_ROUTE}
      component={HomePage}
    />
  </Switch>
</Suspense> */}
