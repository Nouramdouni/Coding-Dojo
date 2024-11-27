import './App.css'
import Article from './assets/components/Article'
function App() {
const preson=[ 
  {firstName:"Doe",lastName:"Jane",age:45,hair_Color:"Balck"},
  {firstName:"Smith",lastName:"Jane",age:88,hair_Color:"Brown"}
]
  return (
   <div className=''>
    { 
      preson.map((elm,indx)=>{ 
        return <Article
          firstName={elm.firstName}
          lastName={elm.lastName}
          age={elm.age}
          hair_Color={elm.hair_Color} 
          key={indx}
        />
      })
    }
   </div>
  )
}

export default App
