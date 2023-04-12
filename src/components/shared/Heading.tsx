import styled from "styled-components";

import { white } from "../../styles/colors";
import { sectionMargins } from "../../styles/mixins";
import { breakpoints } from "../../styles/breakpoints";


const Text = styled.h1`
    font-family: Sora, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 92px;
    line-height: 80px;

    text-align: center;
    letter-spacing: -0.02em;
    // margin-bottom: 50px;
    margin-bottom: 100px;

    color: ${white}

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;

    ${sectionMargins}

    @media (max-width: ${breakpoints.lg}px) {
        font-size: 72px;
        line-height: 72px;
    }

    @media (max-width: ${breakpoints.md}px) {
        font-size: 58px;
        line-height: 58px;
    }

    @media (max-width: ${breakpoints.sm}px) {
       font-size: 50px;
       line-height: 50px;
       margin-bottom: 50px;
    }
`

interface Props {
    headingText: string;
}

const Heading: React.FC<Props> = ({headingText}) => <Text>{headingText}</Text>;

export default Heading;