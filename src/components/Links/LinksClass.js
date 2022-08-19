import React from 'react'

import unique from 'uniqid'

import { router } from '@/components/Links/router'

import { Ul, LiItem, StyledLink } from '@/components/Links/components'

class LinksCl extends React.Component {
    render() {
        return (
            <Ul>
                {router.map(rout => (
                    <LiItem key={unique()}>
                        <StyledLink to={rout.address}>
                            {rout.name}
                        </StyledLink>
                    </LiItem>
                ))}
            </Ul>
        )
    }
}

export default LinksCl