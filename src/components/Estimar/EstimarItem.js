import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Button} from 'react-mdl'

import Map from '../Map'

const EstimarItem = () => {
    let inputRef = React.createRef()
    const [location, setLocation] = useState({ lat: 0, lng: 0 })
    const [locationName, setLocationName] = useState("Universidad De Los Andes, Bogota")

    async function fetchLocation(locName) {
        let result;
        try {
            result = await axios.get(
                'https://maps.googleapis.com/maps/api/geocode/json',
                {
                    params: {
                        address: locName,
                        key: 'AIzaSyAK7bhwFBja9fm9I78AJ8pfpfnCP4xf2cM'
                    }
                }
            )
        }
        catch (error) {
            result = await axios.get(
                'https://maps.googleapis.com/maps/api/geocode/json',
                {
                    params: {
                        address: "Universidad De Los Andes, Bogota",
                        key: 'AIzaSyAK7bhwFBja9fm9I78AJ8pfpfnCP4xf2cM'
                    }
                }
            )
        }
        setLocation(result.data.results[0].geometry.location)
        console.log(result)
    }

    useEffect(() => {
        fetchLocation(locationName)
    }, [locationName])

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m8 l9">
                <Map location={location} />
                </div>
                <div className="col s12 m4 l3" style={{ marginTop: '40px' }}>
                    <div style={{fontFamily: "times", fontSize:"25pt", fontStyle:"italic",}}>Tipo de Propiedad</div>
                    <br></br>
                    <select>
                        <option value="inmueble">Inmueble</option>
                        <option value="vehiculo">Vehiculo</option>
                    </select>
                    <div style={{ fontSize:"14pt", color:"#fff" }}>Dirección:</div>

                    <br></br>



                    <input type="text" placeholder="Dirección" ref={inputRef} />
                    <br></br>

                    <button className="btn" onClick={() => setLocationName(inputRef.current.value)}>Buscar</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    <div style={{ fontSize:"14pt", color:"#fff" }}>Tamaño en metros:</div>
                    <input type="text" placeholder="200m" />
                </div>
                <div className="col "></div>
            </div>
        </div>
    )
}

export default EstimarItem