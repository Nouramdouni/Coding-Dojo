import React, { useState } from 'react' 
import axios from "axios" 
import { useEffect } from 'react' 
import { Link } from 'react-router-dom'

const Home = () => { 
    const [ books,setBooks]=useState([]) 
    useEffect(()=>{  
        axios.get("http://localhost:5000/api/book")  
        .then((res) => {
            console.log("**********************")
            console.log(res.data)
            setBooks(res.data)
        })
        .catch((err) => {
            console.log(err)
            
        })

    },[]) 
    


  return ( 
    <div> 
        <table className='table table-sm san m-5' >
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Page</td>
                    <td>Available</td> 
                    <td>Books page </td>
                </tr>   
            </thead> 
            <tbody> 
                { 
                    books.map((book)=>{
                        return (<tr key={book._id}>
                            <td>{ book.title}</td>
                            <td>{ book.outhor}</td>
                            <td>{book.page}</td>
                            <td>{book.isAvailable? "yes" : "no"}</td> 
                            <td> 
                                <Link to={"/book/"+ book._id} className=' btn btn-light'>Book Details </Link></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home