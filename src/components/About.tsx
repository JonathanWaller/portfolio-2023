import styled from "styled-components";
import Heading from "./shared/Heading";

import TextSphere from "./TextSphere/TextSphere";

import { darkGray } from "../styles/colors";
import { breakpoints } from "../styles/breakpoints";

const Container = styled.div`
    display: flex;
    width: 100;

    @media (max-width: ${breakpoints.md}px) {
        flex-direction: column;
        align-items: center;
        gap: 60px;
    }
`

const LeftColumn = styled.div`
    width: 50%;

    @media (max-width: ${breakpoints.md}px) {
        width: 100%;
    }
`

const RightColumn = styled.div`
    width: 50%;

    @media (max-width: ${breakpoints.md}px) {
        width: 100%;
    }
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const Category = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const CategoryHeading = styled.div`
    font-family: 'Sora';
    font-style: normal;
    font-size: 22px;
    font-weght: 600 !important;
    line-height: 120%;
    letter-spacing: -0.03em;

    color: ${darkGray};
`

const Text = styled.div`
    font-family: 'Sora';
    font-style: normal;
    line-height: 120%;
    letter-spacing: -0.03em;

    color: ${darkGray};
`

const About = () => {

    return(
        <>
            <Heading headingText="About Me"/>
            <Container>
                <LeftColumn>
                    <TextContainer>
                        <Text>
                            I'm a frontend engineer, currently living in Brooklyn, NY. I truly love the career path I have chosen. It may sound 
                            cliche, but there's something truly inspiring found at the intersection of creativity and functionality. 
                        </Text>
                        <Text>
                            I strive to make the best product possible, and I've been enjoying the ride for the past 4.5 years. A few things about me:
                        </Text> 

                        <Category>
                            <CategoryHeading>Industry Experience</CategoryHeading>
                            <Text>Fintech, manufacturing and logistics, on-demand planning</Text>
                        </Category>

                        <Category>
                            <CategoryHeading>Interests</CategoryHeading>
                            <Text>Running and reading. I've also made it a personal goal to visit every pizza shop in NYC. Not easy but I'm up for the challenge!</Text>
                        </Category>
                    </TextContainer>
                </LeftColumn>
                <RightColumn>
                    <TextSphere />
                </RightColumn>
            </Container>
        </>
    )
}

export default About;