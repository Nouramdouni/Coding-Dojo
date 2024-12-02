import { useState } from 'react'
import './App.css'
import Tab from "./components/Tab" 
import Show  from './components/Show';

function App() {
 const Table=[
   {title:"tab 1 content is showing here ",tab:"tab1"},
   {title:"tab 2 content is showing here ",tab:"tab2"},
   {title:"tab 3 content is showing here ",tab:"tab3"},
 ]  ;
 const [tab,setTab]=useState(0);
//  const list=Table.filter((b)=>{ 
//   if(tab=="tab1"){ 
//     return b.title
//   }
//   if(tab=="tab2"){ 
//     return b.title
//   }
//   if(tab=="tab3"){ 
//     return b.title
//   } 
  
//  })


  return (
    <>
      <Tab tab={setTab}></Tab> 
      <Show list={Table[tab]}></Show>
    </>
  )
}

export default App







































//  bechh nefiche  fi show di index  emt3e kol haje ye3ni ethe enzel 3ale bt1 bech yemchi eli tab1 eli endex emt3o 0 bech ye5ou title emt3ou ou yefichih ye3ni  
//btn2 index 1 de title  1 
