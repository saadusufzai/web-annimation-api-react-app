import React from 'react'
import classes from './animation.module.css'
import clouds from './images/cloud.png'
const Animation = () => {
    return (
        <div className={classes.bg}>
            <div className={classes.clouds}>

                <img  className={classes.cloud1} src={clouds}/>
                <img  className={classes.cloud2} src={clouds}/>
                <img  className={classes.cloud3} src={clouds}/>
                <img  className={classes.cloud4} src={clouds}/>
            </div>
            <h1>ANIMAITON</h1>

        </div>
    )
}

export default Animation
