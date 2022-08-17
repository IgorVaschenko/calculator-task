import React from 'react'
import unique from 'uniqid'
import { Uls, Lis, StyledLink } from '@/components/Links/components'
import { router } from '@/components/Links/router'

class LinksCl extends React.Component {
    render() {
        return (
            <Uls>
                {router.map(rout => (
                    <Lis key={unique()}>
                        <StyledLink to={rout.address}>
                            {rout.name}
                        </StyledLink>
                    </Lis>
                ))}
            </Uls>
        )
    }
}

export default LinksCl