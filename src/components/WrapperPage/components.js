import React from 'react';
import styled from 'styled-components';

export const WrapperPage = styled.div`
width: 100%;
${'' /* height: 600px; */}
display: grid;
grid-template-areas:
    'header header'
    'calculator history'
    'footer footer';
grip-gap: 10px;
grid-template-columns: 4fr 1fr;
`