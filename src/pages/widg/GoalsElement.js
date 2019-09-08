import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture,faCar,faBed,faMap} from '@fortawesome/free-solid-svg-icons';

export default function GoalsElement(props) {
    let ele= [faPlaneDeparture,faCar,faBed,faMap]
    return (
        <div className={`goals-element-${props.type}`}>
            <div className="goals-title">
                {props.title}
            </div>
            <div className="goals-description"></div>
            <div className="goals-procent">
                {props.porcent}
            </div>
            <div className="goals-icon">
                <FontAwesomeIcon icon={ele[props.icon]}/>
            </div>
            
        </div>
    )
}
