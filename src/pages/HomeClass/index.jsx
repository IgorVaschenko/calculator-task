import React from 'react'

import { PageLayout } from '@/layouts'

import WrapperPageCl from '@/components/WrapperPage/WrapperPageClass'
import HeaderCl from '@/components/Header/HeaderClass'
import CalculatorCl from '@/components/Calculator/CalcClass'

export default () => {
  return (
    <PageLayout>
      <WrapperPageCl>
        <HeaderCl />
        <CalculatorCl />
      </WrapperPageCl>
    </PageLayout>
  )
}