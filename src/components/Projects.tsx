import { useState, useEffect } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight, GitHub } from "react-feather";
import useWindowWidth from "react-hook-use-window-width";

import Heading from "./shared/Heading";

import { breakpoints } from "../styles/breakpoints";
import { gray, white, black, darkGray } from "../styles/colors";

import { greenwoodImages, restayImages, runningImages, projects, projectMobile } from "../utils/common";
import { Project, ProjectImage } from "../types/projects";

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: start;

    @media (max-width: ${breakpoints.md}px) {
        flex-direction: column;
        // padding-top: 200px;
        // padding-bottom: 200px;
    }
`

const FeatureTextColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 43%;
    gap: 500px;
    padding-top: 350px;
    padding-bottom: 350px;
    padding-right: 10px;
    border: 1px solid red;
`

const FeatureTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media (max-width: ${breakpoints.md}px) {
        height: unset;
        align-items: center;
        text-align: center;
        padding-left: 20px;
        padding-right: 20px;
    }
`

const FeatureTypeTagRainbowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: conic-gradient(from 225deg at 50% 50%, #AD00FF 0deg, #FF1183 90deg, #FFAC5F 180deg, #00A3FF 270deg, #648F98 326.25deg, #AD00FF 360deg);
    padding: 1px;
    border-radius: 20px;
    width: fit-content;
    height: min-content;
`

const FeatureTypeTag = styled.a`
    background: linear-gradient(107.79deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.02) 100%), ${black};
    border-radius: 20px;
    padding: 7px 14px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-style: normal;
    font-weight: 800;
    font-size: 13px;
    line-height: 14px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-feature-settings: 'liga' off;

    color: ${white};
    gap: 10px;
    text-decoration: none;
    
`

const StyledGithub = styled(GitHub)`
    stroke: ${white};
    stroke-width: 1.8px;
    height: 18px;
    width: 18px;

    &:hover {
        cursor: pointer;
        stroke-width: 2px;
    }
` 

const FeatureHeaderText = styled.h2`
    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 110%;
    letter-spacing: -0.03em;

    color: ${darkGray};

    @media (max-width: ${breakpoints.xl}px) {
        font-size: 56px;
    }

    @media (max-width: ${breakpoints.lg}px) {
        font-size: 44px;
    }
`

const FeatureSubheaderText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 120%;

    color: ${gray};

    @media (max-width: ${breakpoints.xl}px) {
        font-size: 24px;
    }

    @media (max-width: ${breakpoints.lg}px) {
        font-size: 18px;
    }
`

const FeatureImageSection = styled.div`
    position: sticky;
    top: 0px;
    height: 100vh;

    display: flex;
    flex-grow: 1;
    border: 1px solid blue;
`

const FeatureImageWrapper = styled.div`
    transition: opacity 400ms ease-in-out;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    height: 100%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;

    border: 1px solid red;
`

const MobileProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const MobileGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;

    &:last-child {
        padding-bottom: 0;
    }
`

// const FeatureImage = styled.img`
//     box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);
//     border-radius: 11px;
//     overflow: hidden;

//     height: 60vh;
//     width: auto;

//     @media (max-width: ${breakpoints.xl}px) {
//         height: 50vh;
//     }
//     @media (max-width: ${breakpoints.lg}px) {
//         height: 45vh;
//     }

//     @media (max-width: ${breakpoints.md}px) {
//         width: 50vw;
//         height: auto;
//     }

//     @media (max-width: ${breakpoints.sm}px) {
//         width: 65vw;
//         height: auto;
//     }
// `

const FeatureImageContainer = styled.div`
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);
    border-radius: 11px;
    overflow: hidden;

    border: 1px solid green;
    height: auto;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    // background-size: contain;

    position: relative;

    z-index: 1000;

    @media (max-width: ${breakpoints.xl}px) {
        height: 50vh;
    }
    @media (max-width: ${breakpoints.lg}px) {
        height: 45vh;
    }

    @media (max-width: ${breakpoints.md}px) {
        width: 50vw;
        height: auto;
    }

    @media (max-width: ${breakpoints.sm}px) {
        width: 65vw;
        height: auto;
    }
`

const StyledImage = styled.img`
    // background-size: contain;
    // max-width: 100%;
    // height: auto;

    // margin-top: 30px;
    // border: 3px solid black;
    border-radius: 8px;
    width: 100%;
    height: auto;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);

    @media (max-width: ${breakpoints.md}px) {
        margin-top: 0;
    }

    image-rendering: -moz-crisp-edges;
    /* Firefox */
    image-rendering: -o-crisp-edges;
    /* Opera */
    image-rendering: -webkit-optimize-contrast;
    /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
`

const LeftArrow = styled(ArrowLeft)<{dark?: boolean}>`
    color: ${({dark}) => dark ? `${black}` : `${gray}`};
    position: absolute;
    top: 50%;
    left: 5px;

    &:hover {
        cursor: pointer;
    }
`

const RightArrow = styled(ArrowRight)<{dark?: boolean}>`
    color: ${({dark}) => dark ? `${black}` : `${gray}`};
    position: absolute;
    top: 50%;
    right: 5px;

    &:hover {
        cursor: pointer;
    }
`

interface Props { 
    viewRef: any;
}

const Projects: React.FC<Props> = ({viewRef}) => {
    const width = useWindowWidth();
    const [imageVisible, setImageVisible] = useState<'1' | '2' | '3' | '4' | null>(null);
    const [ imageState, setImageState ] = useState<{[key: string]: number}>({
        greenwood: 0,
        restay: 0,
        running: 0
    })

    const { greenwood, restay, running } = imageState;



    const projectImagesDesktop: ProjectImage[] = [
        {
            id: '1',
            name: 'greenwood',
            imgSrc: greenwoodImages[greenwood].src,
            altName: 'Greenwood Labs',
        },
        {
            id: '2',
            name: 'restay',
            imgSrc: restayImages[restay].src,
            altName: 'restay img',
        },
        {
            id: '3',
            name: 'running',
            imgSrc: runningImages[running].src,
            altName: 'running img',
        }
    ]



    const test2 = (name: string, direction: 'left' | 'right') => {
        
        const innterTest = () => {
            switch( name ) {
                case 'greenwood':
                    return [imageState.greenwood, greenwoodImages.length]
                case 'restay':
                    return [imageState.restay, restayImages.length];
                case 'running':
                    return [imageState.running, runningImages.length]
                default: 
                    return [];
            }
        }

        const [ state, length ] = innterTest();
        
        if( direction === 'left' ) {
            if( state === 0 ){
                return length - 1
            } else { 
                return state - 1
            } 
        } else {
            if( state === length - 1 ) {
                return 0
            } else {
                return state + 1
            }
        }        
    }

    const handleNavigate = (loc: string, num: number ) => {
        setImageState( {
            ...imageState,
            [loc]: num
        })
    }

    useEffect( ( ) => {
        let featureTextColumn = document.getElementById( 'feature-text-column' )
        let feature1 = document.getElementById( 'feature-1' )
        let feature2 = document.getElementById( 'feature-2' )
        let feature3 = document.getElementById( 'feature-3' )
        // let feature4 = document.getElementById( 'feature-4' )

        let featureVideo1 = document.getElementById( 'feature-1-video' ) as HTMLVideoElement
        let featureVideo2 = document.getElementById( 'feature-2-video' ) as HTMLVideoElement
        let featureVideo3 = document.getElementById( 'feature-3-video' ) as HTMLVideoElement
        // let featureVideo4 = document.getElementById( 'feature-4-video' ) as HTMLVideoElement


        if (feature1 && feature2 && feature3 
            // && feature4
        ) {

            let feature1Observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    setImageVisible('1')
                    featureVideo1.pause()
                    featureVideo1.currentTime = 0
                    setTimeout(() => {
                        featureVideo1.play()
                    }, 450)
                }
            }, {threshold: 0.5})
    
            let feature2Observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    setImageVisible('2')
                    featureVideo2.pause()
                    featureVideo2.currentTime = 0
                    setTimeout(() => {
                        featureVideo2.play()
                    }, 450)
                }
            }, {threshold: 0.5})
    
            let feature3Observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    setImageVisible('3')
                    featureVideo3.pause()
                    featureVideo3.currentTime = 0
                    setTimeout(() => {
                        featureVideo3.play()
                    }, 450)
                }
            }, {threshold: 0.5})

            // let feature4Observer = new IntersectionObserver((entries) => {
            //     if(entries[0].isIntersecting) {
            //         setImageVisible('4')
            //         featureVideo4.pause()
            //         featureVideo4.currentTime = 0
            //         setTimeout(() => {
            //             featureVideo4.play()
            //         }, 450)
            //     }
            // }, {threshold: 0.5})

            feature1Observer.observe(feature1)
            feature2Observer.observe(feature2)
            feature3Observer.observe(feature3)
            // feature4Observer.observe(feature4)
        }   
        

        // Scroll listener to hide the image when not in the features section
        const resetOpacity = () => {
            if (featureTextColumn) {
                let featureTextColumnRect = featureTextColumn.getBoundingClientRect();

                if (featureTextColumnRect.top >= window.innerHeight || featureTextColumnRect.bottom <= 0) {
                    setImageVisible(null);
                }
            }
        }

        document.addEventListener('scroll', resetOpacity)
        return () => {
            document.removeEventListener('scroll', resetOpacity)
        }
    }, [] )

    return(
        <>
        <Heading headingText="Projects" />
        <Container>
            {
                width > breakpoints.md
                ?
                <>
                <FeatureTextColumn id="feature-text-column">
                    {
                        projects.map( ({textId,url, name, header, description }: Project, index: number) => (
                            <FeatureTextContainer id={textId}>
                                <FeatureTypeTagRainbowContainer>
                                    <FeatureTypeTag target="_blank" rel="noreferrer" href={url}>
                                        {name}
                                        <StyledGithub />
                                    </FeatureTypeTag>
                                </FeatureTypeTagRainbowContainer>
                                <FeatureHeaderText>{header}</FeatureHeaderText>
                                <FeatureSubheaderText>{description}</FeatureSubheaderText>
                            </FeatureTextContainer>
                        ))
                    }
                </FeatureTextColumn>
                <FeatureImageSection>
                    {
                        projectImagesDesktop.map( ({id, name, imgSrc, altName}: ProjectImage, index: number ) => (
                            <FeatureImageWrapper style={{opacity: imageVisible === id ? 1 : 0 }} key={id}>
                                <FeatureImageContainer>
                                    <LeftArrow onClick={()=>handleNavigate( name, test2(name, 'left') )}/>
                                    <RightArrow onClick={()=>handleNavigate( name, test2(name, 'right') )} />
                                    <StyledImage src={imgSrc} alt={altName} /> 
                                </FeatureImageContainer>
                            </FeatureImageWrapper>
                        ))
                    }
                </FeatureImageSection>
                </>
                : 
                <MobileProjectContainer>
                {
                    projectMobile.map( ({textId, url, name, header, description, id, imgSrc, altName}: any ) => (
                        <MobileGroup key={id}>
                            <FeatureTextContainer id={textId}>
                                <FeatureTypeTagRainbowContainer>
                                    <FeatureTypeTag target="_blank" rel="noreferrer" href={url}>
                                        {name}
                                        <StyledGithub />
                                    </FeatureTypeTag>
                                </FeatureTypeTagRainbowContainer>
                                <FeatureHeaderText>{header}</FeatureHeaderText>
                                <FeatureSubheaderText>{description}</FeatureSubheaderText>
                            </FeatureTextContainer>

                            <StyledImage 
                                src={imgSrc}
                                alt={altName}
                            />
                        </MobileGroup>
                    ))
                }
                </MobileProjectContainer>
            }

            
        </Container>
        </>
    )
}

export default Projects;