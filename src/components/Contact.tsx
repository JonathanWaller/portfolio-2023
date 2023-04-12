import styled from "styled-components";

import { GitHub, Linkedin, Mail  } from "react-feather";

import Heading from "./shared/Heading";

import contactMap from '../assets/images/contactMap.png';
import { breakpoints } from "../styles/breakpoints";
import { darkGray } from "../styles/colors";

const ContactContainer = styled.div`
    display: flex;
    width: 100%;
    
    @media (max-width: ${breakpoints.md}px) {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`

const LeftPanel = styled.div`
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    gap: 25px;
    width: 50%;

    @media (max-width: ${breakpoints.md}px) {
        width: 100%;
    }
`

const SocialsContainer = styled.div`
    display: flex;
    gap: 40px;
    width: 100%;
    display: flex;
    

    @media (max-width: ${breakpoints.md}px) {
        justify-content: center;
        align-items: center;
        gap: 25px;
    }
`

const Social = styled.a`
    display: flex;
    align-items: center;
`

const MapContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${breakpoints.md}px) {
        width: 100%;
    }
`

const Map = styled.img`
    width: 100%;
    height: auto;
    padding-left: 5px;

    image-rendering: -moz-crisp-edges;
    /* Firefox */
    image-rendering: -o-crisp-edges;
    /* Opera */
    image-rendering: -webkit-optimize-contrast;
    /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
`

const StyledGithub = styled(GitHub)`
    stroke: #1A1F36;
    stroke-width: 1.8px;
    height: 37px;
    width: 37px;

    &:hover {
        cursor: pointer;
        stroke-width: 2px;
    }

    @media (max-width: ${breakpoints.md}px) {
        height: 30px;
        width: 30px;
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

    @media (max-width: ${breakpoints.md}px) {
        height: 35px;
        width: 35px;
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

    @media (max-width: ${breakpoints.md}px) {
        height: 35px;
        width: 35px;
    }
` 

const ContactText = styled.div`
    font-family: 'Sora';
    font-style: normal;
    line-height: 120%;
    letter-spacing: -0.03em;

    color: ${darkGray};
`

const Contact = () => {

    return(
        <>
            <Heading headingText="Contact" />
            <ContactContainer>
                <LeftPanel>
                    <ContactText>
                        I'm interested in projects where I can make an impact. I have professional experience 
                        in fintech, manufacturing and logistics industries, but the team and project are most important to me.
                    </ContactText>
                    <ContactText>
                        Please feel free to reach out with any questions!
                    </ContactText>
                    <SocialsContainer>
                        <Social href="mailto:waller.j27@gmail.com"><StyledEmail /></Social>
                        <Social href="https://linkedin.com/in/wallerjonathan" target="_blank" rel="noreferrer"><StyledLinkedIn /></Social>
                        <Social href="https://github.com/JonathanWaller" target="_blank" rel="noreferrer"><StyledGithub /></Social>
                    </SocialsContainer>
                </LeftPanel>
                <MapContainer>
                    <Map src={contactMap}/>
                </MapContainer>
            </ContactContainer>
        </>
    )
}

export default Contact;