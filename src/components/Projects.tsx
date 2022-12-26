import { useState, useEffect } from "react";
import styled from "styled-components";

import { ArrowLeft, ArrowRight } from "react-feather";

import { sectionMargins } from "../styles/mixins";
import { breakpoints } from "../styles/breakpoints";

import { gray, white, black } from "../styles/colors";

import { greenwoodImages, restayImages } from "../utils/common";

const Container = styled.div`
    width: 100%;
    ${sectionMargins}

    display: flex;
    justify-content: space-between;
    align-items: start;

    @media (max-width: ${breakpoints.md}px) {
        flex-direction: column;
        gap: 200px;
        padding-top: 200px;
        padding-bottom: 200px;
    }
`

const MainText = styled.h1`
    font-family: Sora, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 92px;
    line-height: 80px;
    /* identical to box height, or 87% */

    text-align: center;
    letter-spacing: -0.02em;

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
    }
`

const FeatureTextColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 35%;

    gap: 500px;
    padding-top: 350px;
    padding-bottom: 350px;
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

const FeatureTypeTag = styled.div`
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
`

const FeatureHeaderText = styled.h2`
    font-family: 'Sora';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 110%;
    letter-spacing: -0.03em;

    color: ${white};

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

const FeatureVideo = styled.video`
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);
    border-radius: 11px;
    overflow: hidden;

    border: 1px solid blue;

    height: 60vh;
    width: auto;

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

const FeatureImageContainer = styled.div`
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.07);
    border-radius: 11px;
    overflow: hidden;

    border: 1px solid green;
    height: 42vh;
    // height: 60vh;
    width: auto;
    // width: 100%;

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
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;

    image-rendering: -moz-crisp-edges;
    /* Firefox */
    image-rendering: -o-crisp-edges;
    /* Opera */
    image-rendering: -webkit-optimize-contrast;
    /* Webkit (non-standard naming) */
    image-rendering: crisp-edges;
`

const LeftArrow = styled(ArrowLeft)`
    color: red;
    position: absolute;
    top: 50%;
    left: 5px;

    &:hover {
        cursor: pointer;
    }
`

const RightArrow = styled(ArrowRight)`
    color: red;
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
    const [imageVisible, setImageVisible] = useState<'1' | '2' | '3' | '4' | null>(null);
    const [ imageState, setImageState ] = useState<{[key: string]: number}>({
        greenwood: 0,
        restay: 0
    })

    const { greenwood, restay } = imageState;

    const test2 = (name: string, direction: 'left' | 'right') => {
        
        const innterTest = () => {
            switch( name ) {
                case 'greenwood':
                    return [imageState.greenwood, greenwoodImages.length]
                case 'restay':
                    return [imageState.restay, restayImages.length];
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

    // const handleNavigate = (loc: string, direction: 'left' | 'right') => {
    //     // console.log('HERE: ', eval(`${loc}Images`))
    //     console.log('HERE: ', greenwoodImages)
    //     // console.log('HERE: ', restayImages)
    //     if( direction === 'left' ) {
    //         setImageState( {
    //             ...imageState,
    //             [loc]: imageState[loc] === 0 ? eval(`${loc}Images`).length -1 :  imageState[loc] - 1
    //         })
    //     } else {
    //         setImageState( {
    //             ...imageState,
    //             [loc]: eval(`${loc}Images`).length -1 === imageState[loc] ? 0 : imageState[loc] + 1
    //         })
    //     }
    // }

    useEffect( ( ) => {
        let featureTextColumn = document.getElementById( 'feature-text-column' )
        let feature1 = document.getElementById( 'feature-1' )
        let feature2 = document.getElementById( 'feature-2' )
        let feature3 = document.getElementById( 'feature-3' )
        let feature4 = document.getElementById( 'feature-4' )

        let featureVideo1 = document.getElementById( 'feature-1-video' ) as HTMLVideoElement
        let featureVideo2 = document.getElementById( 'feature-2-video' ) as HTMLVideoElement
        let featureVideo3 = document.getElementById( 'feature-3-video' ) as HTMLVideoElement
        let featureVideo4 = document.getElementById( 'feature-4-video' ) as HTMLVideoElement


        if (feature1 && feature2 && feature3 && feature4) {

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

            let feature4Observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting) {
                    setImageVisible('4')
                    featureVideo4.pause()
                    featureVideo4.currentTime = 0
                    setTimeout(() => {
                        featureVideo4.play()
                    }, 450)
                }
            }, {threshold: 0.5})

            feature1Observer.observe(feature1)
            feature2Observer.observe(feature2)
            feature3Observer.observe(feature3)
            feature4Observer.observe(feature4)
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

    console.log('GW IMAGES: ', greenwoodImages)

    return(
        <>
        <MainText>Projects</MainText>
        <Container>
            <FeatureTextColumn id="feature-text-column">
                <FeatureTextContainer id="feature-1">
                    <FeatureTypeTagRainbowContainer>
                        <FeatureTypeTag>Greenwood</FeatureTypeTag>
                    </FeatureTypeTagRainbowContainer>
                    <FeatureHeaderText>
                        DeFi tool
                    </FeatureHeaderText>
                    <FeatureSubheaderText>
                        Greenwood allows DeFi users to borrow cyrptocurrency using owned tokens as collateral. 
                    </FeatureSubheaderText>
                </FeatureTextContainer>
                <FeatureTextContainer id="feature-2">
                    <FeatureTypeTagRainbowContainer>
                        <FeatureTypeTag>Restay</FeatureTypeTag>
                    </FeatureTypeTagRainbowContainer>
                    <FeatureHeaderText>
                        Cut out the noise, get to the yield
                    </FeatureHeaderText>
                    <FeatureSubheaderText>
                        Greenwood analyzes and compares thousands of DeFi protocols to find the investment opportunities that best meet your needs.
                    </FeatureSubheaderText>
                </FeatureTextContainer>
                <FeatureTextContainer id="feature-3">
                    <FeatureTypeTagRainbowContainer>
                        <FeatureTypeTag>Make better decisions</FeatureTypeTag>
                    </FeatureTypeTagRainbowContainer>
                    <FeatureHeaderText>
                        Know your costs, invest confidently
                    </FeatureHeaderText>
                    <FeatureSubheaderText>
                        Greenwood simulates depositing and withdrawing on DeFi protocols to calculate gas costs and expected returns before you invest.
                    </FeatureSubheaderText>
                </FeatureTextContainer>
                <FeatureTextContainer id="feature-4">
                    <FeatureTypeTagRainbowContainer>
                        <FeatureTypeTag>Have peace of mind</FeatureTypeTag>
                    </FeatureTypeTagRainbowContainer>
                    <FeatureHeaderText>
                        If you have a problem, we find a solution
                    </FeatureHeaderText>
                    <FeatureSubheaderText>
                        Greenwood works directly with DeFi protocol teams to quickly and effectively resolve any technical problems you experience.
                    </FeatureSubheaderText>
                </FeatureTextContainer>
            </FeatureTextColumn>
            <FeatureImageSection>
                <FeatureImageWrapper style={{opacity: imageVisible === '1' ? 1 : 0 }}>
                    <FeatureImageContainer>
                        <LeftArrow onClick={()=>handleNavigate( 'greenwood', test2('greenwood', 'left') )}/>
                        <RightArrow onClick={()=>handleNavigate( 'greenwood', test2('greenwood', 'right') )} />
                        <StyledImage src={greenwoodImages[greenwood].src} alt="Greenwood Loans" /> 
                    </FeatureImageContainer>
                </FeatureImageWrapper>
                <FeatureImageWrapper style={{opacity: imageVisible === '2' ? 1 : 0 }}>
                    {/* <FeatureVideo id="feature-2-video" muted>
                        <source src={featureVideo2WEBM} type="video/webm"/>
                        <source src={featureVideo2MP4} type="video/mp4"/>
                    </FeatureVideo> */}
                    <FeatureImageContainer>
                        <LeftArrow onClick={()=>handleNavigate( 'restay', test2('restay', 'left') )}/>
                        <RightArrow onClick={()=>handleNavigate( 'restay', test2('restay', 'right'))} />
                        <StyledImage
                            src={restayImages[restay].src}
                            alt="restay img"
                        /> 
                    </FeatureImageContainer>
                </FeatureImageWrapper>
                <FeatureImageWrapper style={{opacity: imageVisible === '3' ? 1 : 0 }}>
                    <FeatureVideo  id="feature-3-video" muted>
                        {/* <source src={featureVideo3WEBM} type="video/webm"/>
                        <source src={featureVideo3MP4} type="video/mp4"/> */}
                    </FeatureVideo>
                </FeatureImageWrapper>
                <FeatureImageWrapper style={{opacity: imageVisible === '4' ? 1 : 0 }}>
                    <FeatureVideo  id="feature-4-video" muted>
                        {/* <source src={featureVideo4WEBM} type="video/webm"/>
                        <source src={featureVideo4MP4} type="video/mp4"/> */}
                    </FeatureVideo>
                </FeatureImageWrapper>
            </FeatureImageSection>
        </Container>
        </>
    )
}

export default Projects;