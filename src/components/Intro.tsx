import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import styled from "styled-components";

import { breakpoints } from "../styles/breakpoints";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${breakpoints.sm}px) {
      height: 30vh;  
    }
`

const Intro = () => {
    const [replay, setReplay] = useState<boolean>(true);

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

    return (
        <motion.div
          className="App"
          initial="hidden"
          // animate="visible"
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
            <Container>
              <div className="container">
                {introText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
                })}
              </div>
          </Container>
        </motion.div>
      );
}

export default Intro;