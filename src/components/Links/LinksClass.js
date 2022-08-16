import React from 'react'
import { Uls, Lis, StyledLink } from './components'
import { router } from '@/components/Links/router'
import { Link } from 'react-router-dom'

class LinksCl extends React.Component {
    render() {
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
}

export default LinksCl