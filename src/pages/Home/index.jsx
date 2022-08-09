import React from 'react'

import { PageLayout } from '@/layouts'

import WrapperPage from '@/components/WrapperPage'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import Calculator from '@/components/Calculator'
import Footer from '@/components/Footer'

export default () => {
  return (
    <WrapperPage>
      <Header />
      <Calculator />
      <Footer />
    </WrapperPage>
  )
}
    // <PageLayout>
    // </PageLayout>