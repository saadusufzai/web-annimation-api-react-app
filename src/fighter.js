import React from 'react'
import figher from './images/3.png'
import classes from './fighter.module.css'
const fighter = () => {
    return (
        <div>
            <div className={classes.box}>
                <img src={figher} />
            </div>
        </div>
    )
}

export default fighter
