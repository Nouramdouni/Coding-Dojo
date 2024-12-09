import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navb from './Navb' 
import "../style/Cart.css"
const Carte = () => {

    const [books, setBooks] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()
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

    }, [])
    const deleteEmma = () => {
        axios.delete(`http://localhost:5000/api/book/${id}`)
            .then((res) => {
                console.log(res.data);
                navigate("/");

            })
    }
    return (
        <div>
            <Navb title={books.title} />
            <div className='carte'>
                {
                    books ? <div>
                        <p>{books.title}</p>
                        <p>{books.outhor}</p>
                        <p> Page count :{books.page}</p>
                        
                        <button className='btn btn-dark' onClick={deleteEmma}>Borrow</button>

                    </div> : <p>loading.....</p>

                }

            </div>
        </div>
    )
}

export default Carte