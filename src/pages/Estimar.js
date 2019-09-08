import React, { useState } from 'react'
import EstimarItem from '../components/Estimar/EstimarItem'

const Estimar = () => {
    const [estimarItems, setEstimarItems] = useState({}) 
    return (
        <div>
            <div>Añadir tus propiedades:</div>
            <EstimarItem />
            <button>Quiero Mis Puntos</button>
        </div>
    )
}

export default Estimar;