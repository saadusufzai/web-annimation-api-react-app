import React from "react";
import figher from "./images/3.png";
import classes from "./fighter.module.css";
import useWebAnimaiton from "@wellyshen/use-web-animations";

const Fighter = () => {
  const { ref: fighterAni } = useWebAnimaiton({
    keyframes: [
      { transform: "translateX(0)" },
      { transform: "translateX(-100%)" },
    ],
    timing: {
      easing: "steps(6,end)",
      duration: 1000,
      iterations: Infinity,
      playbackRate: 1,
    },
  });

  return (
    <div>
      <div className={classes.box}>
        <img
          ref={fighterAni}
          className={classes.fighter}
          src={figher}
          alt={"fighter"}
        />
      </div>
    </div>
  );
};

export default Fighter;
