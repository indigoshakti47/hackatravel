import React from 'react'

import GoalsElement from './GoalsElement'
import GoalsAdd from './GoalsAdd'

export default function Goals() {
    return (
        <div className="goals-container-main">
            <span className="title-home"><b>Ofertas recomendadas</b></span>
            <div className="goals-container">
                <GoalsElement title="Ruta extrema San Gil" porcent="70% OFF" icon={0} type="secondary"/>
                <GoalsElement title="Mi carro" porcent="40%" icon={1} type="secondary"
                />





                     
            </div>
            <br></br>
            <span className="title-home"><b>Crear oferta</b></span>

            <div className="goals-container">
                <GoalsElement title="Viaje a San Andres" porcent="70%" icon={0} type="primary"/>
                <GoalsElement title="Mi carro" porcent="40%" icon={1} type="primary"/>
                <GoalsElement title="Mi carro" porcent="40%" icon={2} type="primary"/>
                <GoalsElement title="Mi carro" porcent="40%" icon={3} type="primary"/>
                    
            </div>
            
        </div>
    )
}
