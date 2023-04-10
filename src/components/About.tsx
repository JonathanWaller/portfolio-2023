import styled from "styled-components";
import Heading from "./shared/Heading";

import { darkGray } from "../styles/colors";

const Container = styled.div`
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
            <Heading headingText="About Me" />
            <Container>
                <Text>
                    Hello, and thank you for visiting my site! I'm a frontend engineer, currently living in Brooklyn, NY. I truly love the career path I have chosen, and I've been enjoying
                    the ride since I began in 2019. A few things about me:
                </Text>

                <Category>
                    <CategoryHeading>Industry Experience</CategoryHeading>
                    <Text>Fintech, manufacturing and logistics, on-demand planning</Text>
                </Category>

                <Category>
                    <CategoryHeading>Tech stack</CategoryHeading>
                    <Text>JavaScript, React.js, TypeScript, Next.js, Web3, D3.js, Socket.IO</Text>
                </Category>

                <Category>
                    <CategoryHeading>Interests</CategoryHeading>
                    <Text>Running and reading. I've also made it a personal goal to visit every pizza shop in NYC. Not easy but I'm up for the challenge!</Text>
                </Category>
                

            </Container>
        </>
    )
}

export default About;