import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

import { breakpoints } from "../styles/breakpoints";

import './Intro.css';

const TopDog = styled.div`
  width: 100%;
  height: 100vh;
  // height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  // @media (max-width: ${breakpoints.sm}px) {
  //   height: 30vh;  
  // }
`

const Containerz = styled.div`
    width: 100%;
    // height: 100vh;
    height: 600px;
    display: flex;
    // background: black;
    justify-content: center;
    align-items: center;

    // border: 1px solid green;

    // position: relative;

    @media (max-width: ${breakpoints.sm}px) {
      height: 30vh;  
    }
`

const Intro = () => {
    const [replay, setReplay] = useState<boolean>(true);

    const particlesInit = useCallback(async (engine: Engine) => {
      console.log(engine);

      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
      await console.log(container);
  }, []);


    const introText: {type: string, text: string}[] = [
        { type: "heading1", text: "I AM JONATHAN WALLER" },
        { type: "paragraph", text: "I build software solutions for user interfaces"}
    ]

    const container = {
        visible: {
          transition: {
            staggerChildren: 0.025
          }
        }
    };

    // const handleReplay = () => {
    //     setReplay(!replay);
    //     setTimeout(() => {
    //     setReplay(true);
    //     }, 600);
    // };

    // return (
        // <motion.div
        //   className="App"
        //   initial="hidden"
        //   // animate="visible"
        //   animate={replay ? "visible" : "hidden"}
        //   variants={container}
        // >
        //     <Container>
        //       <div className="container">
        //         {introText.map((item, index) => {
        //         return <AnimatedText {...item} key={index} />;
        //         })}
        //       </div>
        //   </Container>
        // </motion.div>
    //   );

    return(
      <TopDog>
        <div className="containerz">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}

            options={{
              fullScreen: {
                enable: false
              },
              fpsLimit: 60,
              particles: {
                number: {
                  value: 10,
                  density: {
                    enable: true,
                    value_area: 1000
                  }
                },
                color: {
                  // value: "#f00",
                  // value: '#D3D3D3',
                  // value: '#ADD8E6',
                  // value: '#4169e1',
                  value: '#DA0463',
                  animation: {
                    enable: true,
                    speed: 10,
                    sync: true
                  }
                },
                shape: {
                  type: "circle"
                },
                opacity: {
                  value: 1
                },
                size: {
                  value: 4,
                  random: {
                    enable: true,
                    minimumValue: 1
                  },
                  animation: {
                    enable: true,
                    speed: 5,
                    minimumValue: 3,
                    sync: false
                  }
                },
                move: {
                  enable: true,
                  speed: 2,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  warp: true
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  resize: true
                }
              },
              retina_detect: true,
              // background: {
              //   color: "#000"
              // }
            }}
          />


          <motion.div
            className="App"
            initial="hidden"
            // animate="visible"
            animate={replay ? "visible" : "hidden"}
            variants={container}
          >
              <Containerz>
                <div className="container">
                  {introText.map((item, index) => {
                  return <AnimatedText {...item} key={index} />;
                  })}
                </div>
            </Containerz>
          </motion.div>
      </div>
      </TopDog>
    )
}

export default Intro;