import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
        <div>
            <div>Tipo de Propiedad</div>
            <select>
                <option value="inmueble">Inmueble</option>
                <option value="vehiculo">Vehiculo</option>
            </select>
            <div>Direccion:</div>
            <input type="text" placeholder="Direccion" ref={inputRef} />
            <button onClick={() => setLocationName(inputRef.current.value)}>Buscar</button>
            <div>Tamano:</div>
            <input type="text" placeholder="En mts" />
            <Map location={location} />
        </div>
    )
}

export default EstimarItem