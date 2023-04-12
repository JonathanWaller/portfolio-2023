import { useEffect } from "react";
import useWindowWidth from "react-hook-use-window-width";
import TagCloud from "TagCloud";
import './TextSphere.css';
import { skills } from "../../utils/common";
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

    const options = {
      radius: checkWidth(),
      maxSpeed: 'normal',
      initSpeed: 'normal',
      // keep: true,
      keep: false
    };

    TagCloud(container, skills, options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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