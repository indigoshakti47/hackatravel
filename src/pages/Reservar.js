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
                <Cardreserva></Cardreserva>
                <Cardreserva></Cardreserva>
                <Cardreserva></Cardreserva> </div>
                
            </div>
            
            

        );
    }
}
export default Reservar;