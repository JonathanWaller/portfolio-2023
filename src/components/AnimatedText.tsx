import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import useWindowWidth from "react-hook-use-window-width";
import {breakpoints} from '../styles/breakpoints';

interface Props {
    children: any;
}

// Word wrapper
const Wrapper: React.FC<Props> = (props:any) => {
  // Do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

const Text = styled.div`
  @media (max-width: ${breakpoints.md}px) { 
    font: 4px;
  }
`

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props: any) => {

  const width = useWindowWidth();

  // Map API "type" vaules to JSX tag names
  const tagMap: any = {
    paragraph: "p",
    // heading1: "h1",
    heading1: width < breakpoints.md ? 'h2' : 'h1',
    heading2: "h2"
  };

  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
    //   color: "#FF0088",
        color: "#181518",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words: any[] = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag: any = tagMap[props.type];

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element: any, index: number) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    <Text>
                      {element}
                    </Text>
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

export default AnimatedCharacters;
