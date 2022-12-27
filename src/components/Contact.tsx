import styled from "styled-components";

import { GitHub, Linkedin, Mail  } from "react-feather";

import Heading from "./shared/Heading";

const ContactContainer = styled.div`
    display: flex;
    gap: 40px;
    border: 1px solid red;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledGithub = styled(GitHub)`
    stroke: #1A1F36;
    stroke-width: 1.8px;
    height: 40px;
    width: 40px;

    &:hover {
        cursor: pointer;
        stroke-width: 2px;
    }
` 

const StyledLinkedIn = styled(Linkedin)`
    stroke: #1A1F36;
    stroke-width: 1.8px;
    height: 40px;
    width: 40px;

    &:hover {
        cursor: pointer;
        stroke-width: 2px;
    }
` 

const StyledEmail = styled(Mail)`
    stroke: #1A1F36;
    stroke-width: 1.8px;
    height: 40px;
    width: 40px;

    &:hover {
        cursor: pointer;
        stroke-width: 2px;
    }
` 

const Contact = () => {

    return(
        <>
            <Heading headingText="Contact" />
            <ContactContainer>
                <a href="mailto:waller.j27@gmail.com"><StyledEmail /></a>
                <a href="https://linkedin.com/in/wallerjonathan" target="_blank" rel="noreferrer"><StyledLinkedIn /></a>
                <a href="https://github.com/JonathanWaller" target="_blank" rel="noreferrer"><StyledGithub /></a>
            </ContactContainer>
        </>
    )
}

export default Contact;