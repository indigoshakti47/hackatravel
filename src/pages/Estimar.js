import React, { useState } from 'react'
import EstimarItem from '../components/Estimar/EstimarItem'

const Estimar = () => {
    const [estimarItems, setEstimarItems] = useState({}) 
    return (
        <div className="container">
            <EstimarItem />
            <div class="row">
                <div className="col s12 m12 l12 center-align">
                    <button className="btn">VER OFERTAS</button>
                </div>
            </div>
        </div>
    )
}

export default Estimar;