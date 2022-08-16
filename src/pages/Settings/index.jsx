import React from 'react'

import { PageLayout } from '@/layouts'
import WrapperPage from '@/components/WrapperPage'
import Header from '@/components/Header'
import Settings from '@/containers/Settings'

export default () => {
  return (
    <PageLayout>
      <WrapperPage>
        <Header />
        <Settings />
      </WrapperPage>
    </PageLayout>
  )
}
