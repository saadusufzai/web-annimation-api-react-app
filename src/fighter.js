import React from 'react'
import figher from './images/3.png'
import classes from './fighter.module.css'
import useWebAnimaiton from '@wellyshen/use-web-animations'

const Fighter = (figherSpeed) => {

    const {ref:fighterAni , getAnimation:f1} = useWebAnimaiton({

        keyframes:[
            {transform: 'translateX(0)'},
            {transform: 'translateX(-100%)'},
        ],
        timing:{
            easing:'steps(6,end)',
            duration:1000,
            iterations:Infinity,
            playbackRate:1
        }


    })
    var frames=[f1]
    
    const speed = ()=>{
        console.log('click')
   }

  const speedDown = ()=> {
   frames.forEach((e)=>e().updatePlaybackRate(e().playbackRate/1.3))
   }

    return (
        <div>
            <div   className={classes.box}>
                <img onClick={()=>speed} ref={fighterAni} className={classes.fighter} src={figher} />
            </div>
        </div>
    )
}

export default Fighter
