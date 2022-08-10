import React from 'react'

import { PageLayout } from '@/layouts'

import WrapperPage from '@/components/WrapperPage'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import Calculator from '@/components/Calculator'

export default () => {
  return (
    <WrapperPage>
      <Header />
      <Calculator />
    </WrapperPage>
  )
}
    // <PageLayout>
    // </PageLayout>