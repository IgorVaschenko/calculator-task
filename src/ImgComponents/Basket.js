import React from 'react'
import PropTypes from 'prop-types'

import { BasketImg } from '@/ImgComponents/components'


const BasketIcon = ({ src, alt }) => {
    return (
        <BasketImg
            src={src}
            alt={alt}
        />
    )
}
export default BasketIcon

BasketIcon.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
}

BasketIcon.defaultProps = {
    src: 'src/assets/basket.png',
    alt: 'basket',
}
