import React from 'react'

import { PageLayout } from '@/layouts'

import Loader from '@/components/Loader'
import Calculator from '@/containers/Calculator'
import WrapperPageCl from '@/components/WrapperPage/WrapperPageClass'
import HeaderCl from '@/components/Header/HeaderClass'

export default () => {
  return (
    <PageLayout>
      <WrapperPageCl>
        <HeaderCl />
        {/* <Calculator /> */}
      </WrapperPageCl>
    </PageLayout>
  )
}