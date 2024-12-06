import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom' 
import { Navigate } from 'react-router-dom'
import axios from 'axios'
const Carte = () => {

 const [books, setBooks] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:5000/api/book/${id}`)
            .then((res) => {
                console.log("**********************")
                console.log(res.data)
                setBooks(res.data)
            })
            .catch((err) => {
                console.log(err)

            })

    },[]) 
    const deleteEmma = () => { axios.delete(`http://localhost:5000/api/book/${id}`)
   .then((res) => {
      console.log(res.data);
      Navigate("/"); 

   })
}
    return (
        <div className='text-center m-5'>
            {
                books? <div>
                    <h1>{books.title}</h1>
                    <h2>{books.outhor}</h2>
                    <h3>{books.page}</h3> 
                    <button className='btn btn-dark' onClick={deleteEmma}>Borrow</button>

                </div>:<p>loading.....</p>

            }

        </div>
    )
}

export default Carte