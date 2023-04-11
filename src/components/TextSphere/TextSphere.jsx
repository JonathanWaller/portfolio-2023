import React, { useEffect, useCallback } from "react";
import useWindowWidth from "react-hook-use-window-width";
import TagCloud from "TagCloud";
import './TextSphere.css';

import { breakpoints } from "../../styles/breakpoints";

const TextSphere = () => {
  const width = useWindowWidth();

  const checkWidth = () => {
    if( width < breakpoints.sm) return 100;
    if( width < breakpoints.md) return 150;
    if( width > breakpoints.xl) return 200;
    return 200;
  };

  useEffect(() => {
    const container = '.tagcloud';
    const texts = [
      'TypeScript',
      'SASS',
      'JavaScript',
      'React',
      'Next.js',
      'Redux',
      'Node.js',
      'Web3',
      'D3.js',
      'Socket.io',
      'Styled Components'
    ];

    const options = {
      // radius: 300 ,
      // radius: 200,
      // radius: width < breakpoints.md ? 100 : 200,
      // radius: width < breakpoints.sm ? 100 : width < breakpoints.md ? 100 : 100,
      radius: checkWidth(),
      maxSpeed: 'normal',
      initSpeed: 'normal',
      // keep: true,
      keep: false
    };

    TagCloud(container, texts, options);
  }, []);

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextSphere;