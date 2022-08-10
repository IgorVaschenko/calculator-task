import React from 'react';
import { Uls, Lis, StyledLink } from './components';
import { router } from '@/components/router/router';
import { Link } from 'react-router-dom';
import theme from '@/theme';

const Links = () => {
    return (
        <Uls>
            {router.map((rout, i) => (
                <Lis
                    key={i}
                    color={theme.colors.white}
                >
                    <StyledLink
                        to={rout.address}
                        color={theme.colors.white}
                    >
                        {rout.name}
                    </StyledLink>
                </Lis>
            ))}
        </Uls>
    )
}
export default Links