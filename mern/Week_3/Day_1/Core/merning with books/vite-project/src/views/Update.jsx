import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'; 
import { useEffect } from 'react' ;
import { useParams } from 'react-router-dom'

import axios from 'axios';
import "../style/Cart.css" 
import Navb from './Navb';

const Update = () => { 
    const [title, setTitle] = useState("");
    const [outhor, setOuthor_Name] = useState("");
    const [page, SetPge] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate() 
    const [ErrorHandler,setErrorHandler]=useState({}) 
    const { id } = useParams() 
    useEffect(() => {
        axios.get(`http://localhost:5000/api/book/${id}`)
            .then((res) => {
                console.log("**********************")
                console.log(res.data) 
                setTitle(res.data.title) 
                setOuthor_Name(res.data.outhor) 
                SetPge (res.data.page) 
                setIsAvailable(res.data.isAvailable)

                
            })
            .catch((err) => {
                console.log(err)

            })

    }, [])
    const submitHandler = (e) => {
        e.preventDefault();
        console.error("azerty");
        
        const newBook = {
            title,
            outhor,
            page,
            isAvailable

        }
        setTitle("")
        setOuthor_Name("")
        SetPge(0)
        setIsAvailable(false)

        axios.put(`http://localhost:5000/api/book/${id}`, newBook)
            .then(res => {
                console.log(res.data);

                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data.errors) 
                setErrorHandler(err.response.data.errors)
            })
    }

  return (
    <div > 
    <Navb title="add book"/>
    <div  id='con'>
        <form onSubmit={(e)=>submitHandler(e)} >  
            <div>
                <label htmlFor="">Title</label>
                <br />
                <input type="text" onChange={e=>setTitle(e.target.value)} className='form-control' id="t1" value={title} /> 
                {ErrorHandler.title && <p>{ErrorHandler.title.message}</p>}
                </div>
            <div><label htmlFor="">Author Name</label>
                <br />
                <input type="text" onChange={e=>setOuthor_Name(e.target.value)} className='form-control'id="t1" value={outhor} />
                {ErrorHandler.outhor && <p>{ErrorHandler.outhor.message}</p>}
                </div>
            
            <div><label htmlFor=""> Page Count</label>
                <br />
                <input type="number" onChange={e=>SetPge(e.target.value)} className='form-control'id="t1" value={page} /> 
                {ErrorHandler.page && <p>{ErrorHandler.page.message}</p>}
                </div>

            <div className='mt-4'><label htmlFor=""> Is it Available?</label><input type="checkbox" checked={isAvailable} onChange={e=> setIsAvailable(e.target.checked)}  /> </div>
            <button className='btn btn-dark '>Add Book!</button>
        </form>
    </div>

</div>
)
}
  


export default Update