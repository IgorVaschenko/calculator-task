import React from 'react'
import { Uls, Lis, StyledLink } from './components'
import { router } from '@/components/Links/router'
import { Link } from 'react-router-dom'
import theme from '@/theme'
export * from './router'

export default () => {
    return (
        <Uls>
            {router.map((rout, i) => (
                <Lis
                    key={i}
                >
                    <StyledLink
                        to={rout.address}
                    >
                        {rout.name}
                    </StyledLink>
                </Lis>
            ))}
        </Uls>
    )
}
