import React from 'react'

import { PageLayout } from '@/layouts'

import WrapperPage from '@/components/WrapperPage'
import Header from '@/components/Header'
import Calculator from '@/components/Calculator'

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