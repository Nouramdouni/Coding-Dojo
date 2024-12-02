import { useEffect, useState } from 'react' 

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import axios from 'axios'; 


function App() {
 const [pokemon,setPokemon]=useState([]) 
  useEffect(()=>{ 
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0") 
    .then(Response=>{setPokemon(Response.data.results)
    .catch(err=>{ 
      console.log(err)
    })

    }) 
  },[])

  return (
    <>
    <h1>Pokemon API</h1>   
    { 
      pokemon.map((pokemon)=>{
        return ( <div><p>{pokemon.name}</p></div>)


      }
    )
    }
    

    </>
  )
}

export default App
