import React from 'react'

import { PageLayout } from '@/layouts'
import WrapperPage from '@/components/WrapperPage'
import Header from '@/components/Header'
import ControlPanel from '@/components/ControlPanel'

export default () => {
  return (
    <WrapperPage>
      <Header />
      <ControlPanel />
    </WrapperPage>
  )
}

    // <PageLayout>
    // </PageLayout>