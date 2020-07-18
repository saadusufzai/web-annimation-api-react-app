import React from 'react'
import classes from './animation.module.css'
import clouds from './images/cloud.png'

import useWebAnimations from "@wellyshen/use-web-animations";
const Animation = () => {
    const { ref, playState } = useWebAnimations({
        keyframes: {
          transform: ["translateX(-40px)",
                      "translateX(1600px)",
                    ],
        },
        timing: {
            duration:10000,
            iterations:Infinity
        }

    });
    const { ref2, playState2 } = useWebAnimations({
        keyframes: {
          transform: ["translateX(-40px)",
                      "translateX(1600px)",
                    ],
        },
        timing: {
            duration:10000,
            iterations:Infinity
        }

    });

    return (
        <div className={classes.bg}>
            <div className={classes.clouds}>

                <img ref={ref}  className={classes.cloud1} src={clouds}/>
                <img ref={ref2}  className={classes.cloud2} src={clouds}/>
                <img  className={classes.cloud3} src={clouds}/>
                <img  className={classes.cloud4} src={clouds}/>
            </div>
            <h1>ANIMAITON</h1>

        </div>
    )
}

export default Animation
