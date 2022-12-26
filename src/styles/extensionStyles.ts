import styled from 'styled-components';

import {sectionMargins} from './mixins';

export const ExtensionContainer = styled.div`
    ${sectionMargins}
    height: 100vh;
    width: 100%;
    background: #FAFAFA;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

export const ExtensionHeaderText = styled.h1`
    font-family: 'Sora';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.01em;
    color: #1A1F36;
`

export const ExtensionMainText = styled.div`
    font-family: 'Manrope';
    color: #1A1F36;
`

export const ExtensionLabelText = styled.h6`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 800;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #8792A2;
`

export const Logotype = styled.img`
    height: 30px;
    margin-bottom: 25px;
`

