import React from 'react'
import PropTypes from 'prop-types'

import { ArrowImg } from '@/ImgComponents/components'

const Arrow = ({ src, alt }) => {
    return (
        <ArrowImg
            src={src}
            alt={alt}
        />
    )
}
export default Arrow

Arrow.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
}

Arrow.defaultProps = {
    src: 'src/assets/arrow.png',
    alt: 'arrow',
}
