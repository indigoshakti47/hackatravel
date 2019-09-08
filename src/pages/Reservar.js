import React, {Component} from 'react';
import Balance from './widg/Balance';
import Goals from './widg/Goals'
import LevelCircle from './widg/LevelCircle'
import './pages.css'
import PaperSheet from './widg/PaperSheet';
import Cardreserva from './widg/CardReserva';
import CardOfertas from './widg/CardOfertas';
import { display } from '@material-ui/system';
import CardPromocion from './widg/CardPromocion';
import Swpper from './widg/Swpper';

import './Reservar.css'

class Reservar extends Component{
    render(){
        return(
            <div className="reserve_container">

                <div className="cards_reserva" style={{display: "flex", justifyContent: "center"}}>
                <Cardreserva descripcion="Pones tu disposición y nosotros ponemos la aventura. Invita a tú pareja y arriesgate!" imagenPath="./images/extremesports.jpg" precio="0"></Cardreserva>
                <Cardreserva descripcion="Cartagena dos noches" imagenPath="./images/happy.jpg" precio="1.500.000"></Cardreserva>
                <Cardreserva descripcion="Experiencia en el amazonas" imagenPath="./images/terra.jfif" precio="1.300.000 (dos personas, 3 noches)"></Cardreserva>
                <Cardreserva descripcion="Pasaje a Madrid" imagenPath="./images/madrid.jpg" precio="1.200.000"></Cardreserva>
                </div>
                
            </div>
            
            

        );
    }
}
export default Reservar;