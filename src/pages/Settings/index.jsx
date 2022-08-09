import React from 'react'

import { PageLayout } from '@/layouts'
import WrapperPage from '@/components/WrapperPage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ControlPanel from '@/components/ControlPanel/Calculator'

export default () => {
  return (
    <WrapperPage>
      <Header />
      <ControlPanel />
      <Footer />
    </WrapperPage>
  )
}

    // <PageLayout>
    // </PageLayout>