import React from 'react'
import classes from './animation.module.css'
import clouds from './images/cloud.png'
import road from './images/road.JPG'
import mountain from './images/mountain.png'
import bandi from './images/4.png'

import useWebAnimations from "@wellyshen/use-web-animations";
const Animation = () => {
    const { ref:cloud1, playState } = useWebAnimations({
        keyframes: [
            { transform: "translateX(700%)" },
            { transform: "translateX(-100%)" },
          ],
        timing: {
            duration:20000,
            iterations:Infinity
        }

    });
    const { ref:cloud2, playState2 } = useWebAnimations({
        keyframes: [
            { transform: "translateX(500%)" },
            { transform: "translateX(-100%)" },
          ],
        
        timing: {
            duration:15000,
            iterations:Infinity
        }

    });
    
    const { ref:cloud3, playState3 } = useWebAnimations({
        keyframes: [
            { transform: "translateX(600%)" },
            { transform: "translateX(-100%)" },
          ],
        
        timing: {
           
            duration:80000,
            iterations:Infinity
        }

    });
    
    const { ref:cloud4, playState4 } = useWebAnimations({
        keyframes: [
            { transform: "translateX(100%)" },
            { transform: "translateX(-100%)" },
          ],
        
        timing: {
            
            duration:60000,
            iterations:Infinity
        }

    });
    const { ref:mountain1, playState5 } = useWebAnimations({
        keyframes: [
            { transform: "translateX(100%)" },
            { transform: "translateX(-100%)" },
            
            
          ],
        
        timing: {
        
            duration:15000,
            iterations:Infinity,
            
           
        }

    });
    const { ref:mountain2, playState6 } = useWebAnimations({
        keyframes: [
           
            { transform: "translateX(100%)" },
            { transform: "translateX(-100%)" },
                        
          ],
        
        timing: {
           delay:7500,
            duration:15000,
            iterations:Infinity
        }

    });
   
   
    const { ref:mountain0, playState8 } = useWebAnimations({
        keyframes: [
            
            { transform: "translateX(0)" },
            { transform: "translateX(-100%)" },
                        
          ],
        
        timing: {
            
            duration:15000,
            iterations:Infinity
        }

    });

    const { ref:queen, runner ,getAnimation } = useWebAnimations({
        keyframes: [
            { transform: "translateY(0)" },
            { transform: "translateY(-100%)" },
            
          ],
        
        timing: {
            easing: 'steps(7, end)',
            duration:1200,
            iterations:Infinity,
            playbackRate:200000
        }

    });

    const speed = ()=>{
        console.log( + 'animation');
    }



    return (
        
        <div  className={classes.bg}>
            <div onClick={()=>speed()} className={classes.box}>
            <img ref={queen} className={classes.bandi} src={bandi}/>
            </div>
            <img src={mountain} className={classes.mountain} ref={mountain0} />
           
           
           
            <div className={classes.clouds}>
            
                <img ref={cloud1} className={classes.cloud1} src={clouds}/>
                <img ref={cloud2} className={classes.cloud2} src={clouds}/>
                <img ref={cloud3} className={classes.cloud3} src={clouds}/>
                <img ref={cloud4} className={classes.cloud4} src={clouds}/>
            
            </div>
           
            <img src={mountain} className={classes.mountain} ref={mountain1} />
            <img src={mountain} className={classes.mountain1} ref={mountain2} />

            
            
            
            
            <img className={classes.road}  src={road}/>
            
            


        </div>
    )
}

export default Animation
