import React, {Component} from 'react';
import Balance from './widg/Balance';
import Goals from './widg/Goals'
import LevelCircle from './widg/LevelCircle'
import './pages.css'
import PaperSheet from './widg/PaperSheet';


class Reservar extends Component{
    render(){
        return(
            <div className="reserve_container">
                <PaperSheet></PaperSheet>
                <LevelCircle/>
                <Balance value="1.150.000" expenses="1.350.000" ingress="2.500.000" />
                <Goals/>
            </div>
            
            

        );
    }
}
export default Reservar;