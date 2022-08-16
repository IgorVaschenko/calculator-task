import React from 'react'

import { PageLayout } from '@/layouts'

import WrapperPage from '@/components/WrapperPage'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import Calculator from '@/containers/Calculator'

export default () => {
  return (
    <PageLayout>
      <WrapperPage>
        <Header />
        <Calculator />
      </WrapperPage>
    </PageLayout>
  )
}