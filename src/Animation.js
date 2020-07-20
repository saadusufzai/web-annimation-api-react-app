import React, {useState} from 'react'
import classes from './animation.module.css'
import clouds from './images/cloud.png'
import road from './images/road.JPG'
import mountain from './images/mountain.png'
import bandi from './images/4.png'
import Fighter from './fighter'
import useWebAnimations from "@wellyshen/use-web-animations";
const Animation = () => {
    const { ref:cloud1, getAnimation:c1 } = useWebAnimations({
        keyframes: [
            { transform: "translateX(700%)" },
            { transform: "translateX(-100%)" },
          ],
        timing: {
            duration:20000,
            iterations:Infinity
        }

    });
    const { ref:cloud2, getAnimation:c2 } = useWebAnimations({
        keyframes: [
            { transform: "translateX(500%)" },
            { transform: "translateX(-100%)" },
          ],
        
        timing: {
            duration:15000,
            iterations:Infinity
        }

    });
    
    const { ref:cloud3, getAnimation:c3 } = useWebAnimations({
        keyframes: [
            { transform: "translateX(600%)" },
            { transform: "translateX(-100%)" },
          ],
        
        timing: {
           
            duration:80000,
            iterations:Infinity
        }

    });
    
    const { ref:cloud4, getAnimation:c4 } = useWebAnimations({
        keyframes: [
            { transform: "translateX(100%)" },
            { transform: "translateX(-100%)" },
          ],
        
        timing: {
            
            duration:60000,
            iterations:Infinity
        }

    });
    const { ref:mountain1, getAnimation:m1 } = useWebAnimations({
        keyframes: [
            { transform: "translateX(100%)" },
            { transform: "translateX(-100%)" },
            
            
          ],
        
        timing: {
        
            duration:15000,
            iterations:Infinity,
            
           
        }

    });
    const { ref:mountain2, getAnimation:m2 } = useWebAnimations({
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
   
   
    const { ref:mountain0, getAnimation:m3 } = useWebAnimations({
        keyframes: [
            
            { transform: "translateX(0)" },
            { transform: "translateX(-100%)" },
                        
          ],
        
        timing: {
            
            duration:15000,
            iterations:Infinity
        }

    });

    const { ref:queen ,getAnimation:q1 } = useWebAnimations({
        keyframes: [
            { transform: "translateY(0)" },
            { transform: "translateY(-100%)" },
            
          ],
        
        timing: {
            easing: 'steps(7, end)',
            duration:1200,
            iterations:Infinity,
            playbackRate:1/2
            
        }

    });
    var frames = [q1,c1,c2,c3,c4,m1,m2,m3]
    const [fighter, setFighter] = useState(1.0)
    const speed = ()=>{
        setFighter(1.3)
         frames.forEach((e)=>e().updatePlaybackRate(e().playbackRate*1.3))
         
    }

   const speedDown = ()=> {
    frames.forEach((e)=>e().updatePlaybackRate(e().playbackRate/1.3))
    }

   

    return (
        
        <div   className={classes.bg}>
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
            
            <button onClick={()=>speedDown()} >CLICK TO SLOW THEM DOWN</button>
            <div onClick={()=>speed()} className={classes.fighter} >
                <Fighter fighterSpeed={fighter}/>
            </div>


        </div>
    )
}

export default Animation
