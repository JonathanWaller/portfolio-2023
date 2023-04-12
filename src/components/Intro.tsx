import { useCallback } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";

import { breakpoints } from "../styles/breakpoints";
import { particleOptions } from "../utils/particleUtils";

import './Intro.css';

const Wrapper = styled.div`
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

    const particlesInit = useCallback(async (engine: Engine) => {
      // console.log(engine);

      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
      // await console.log(container);
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

    return(
      <Wrapper>
        <div className="containerz">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            // @ts-ignore
            options={particleOptions}
          />

          <motion.div
            className="App"
            initial="hidden"
            animate="visible"
            // animate={replay ? "visible" : "hidden"}
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
      </Wrapper>
    )
}

export default Intro;