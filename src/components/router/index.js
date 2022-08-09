import React from 'react';
import { Uls, Lis, LinkUp } from './components';
import { router } from './router';
import { Link } from 'react-router-dom';

const Links = () => {
    return (
        <Uls>
            {router.map((rout, i) => (
                <Lis key={i}>
                    <Link style={{ textDecoration: 'none', color: 'white' }} to={rout.address}>
                        {rout.name}
                    </Link>
                </Lis>
            ))}
        </Uls>
    )
}
export default Links