import React from 'react'

const Tab = ({tab}) => {
  return (
    <div><button onClick={()=>tab(0)}>tab1</button>
    <button onClick={()=>tab(1)}>tab2</button>
    <button onClick={()=>tab(2)}>tab3</button>
    </div>
  )
}

export default Tab