import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp,faChevronCircleDown,faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import DiscreteSlider from './DiscreteSlider';

export default function Balance(props) {
    return (
        <div className="balance-container">
            <span className="title-home"><b>Mi balance</b></span>
            <div className="balance-card">
                <div className="balance-value">
                    ${props.value}
                </div>
                <div className="balance-add" onClick={() => window.location = "/balance/add"}><b>+</b></div>


                <div className="balance-resume">
                    <div className="balance-expenses">
                        <FontAwesomeIcon icon={faChevronCircleUp} size="2x"/>
                        <div className="balance-value-text">
                            Activos <br/>
                            ${props.ingress}
                        </div>
                    </div>
                    <div className="balance-ingress">
                        <FontAwesomeIcon icon={faChevronCircleDown} size="2x"/>
                        <div className="balance-value-text">
                            Billetera<br/>
                            ${props.expenses}
                        </div>
                        
                    </div>
                    <div className="balance-slider">
                        <FontAwesomeIcon icon={faCartArrowDown} size="2x"/>
                        <div className="balance-value-text">
                            <DiscreteSlider></DiscreteSlider>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
