import React, { useEffect, useState } from 'react'
import axios from 'axios'
import From from './From'
import { useParams } from 'react-router-dom'
// const swapi = "https://swapi.dev/api/people"
const Home = () => {
    const { type, id } = useParams();
    const [peoplee, setPeoplee] = useState({})
    const [palanets, setPalanets] = useState({});
    const [error, setError] = useState(false);
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((res) => {
                setError(false)
                if (type === "people") {
                    setPeoplee(res.data);
                }
                else {
                    setPalanets(res.data)
                }
            })
            .catch((err) => {
                setError(true);
                console.log(err);

            })

    }, [type, id])
    return (
        <div>
            <From/>
            {error ? <div> <p>loading</p> </div> : null}
            {
                type === "planets" ?
                    <div>
                        <h1>Planet</h1>
                        <p>Name:{palanets.name}</p>
                        <p>Population:{palanets.population}</p>
                        <p>Terrain:{palanets.terrain}</p>
                        <p>ssurface:{palanets.surface_water}</p>
                    </div> : null
            }
             {
                type === "people" && !error ?
                    <div>
                        <h1>Person</h1>
                        <p>Name: {peoplee.name}</p>
                        <p>Height: {peoplee.height}</p>
                        <p>Eye Color: {peoplee.eye_color}</p>
                        <p>Gender: {peoplee.gender}</p>
                    </div>
                : null
            }

        </div > 
         
    )
}

export default Home