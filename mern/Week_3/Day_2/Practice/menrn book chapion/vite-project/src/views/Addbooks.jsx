import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import "../style/Cart.css" 
import Navb from './Navb';
 


const Addbooks = () => {
    const [title, setTitle] = useState("");
    const [outhor, setOuthor_Name] = useState("");
    const [page, SetPge] = useState(0);
    const [isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate() 
    const [ErrorHandler,setErrorHandler]=useState({}) 
    const[error,setError]=useState({})
    const submitHandler = (e) => {
        e.preventDefault();
        
        const newBook = {
            title,
            outhor,
            page,
            isAvailable

        }
        // setTitle("")
        // setOuthor_Name("")
        // SetPge(0)
        // setCelebrityStatus(false)

        axios.post("http://localhost:5000/api/book", newBook)
            .then(res => {
                console.log(res.data);

                navigate("/");
            })
            .catch(err => {
                console.log(err.response.data.errors) 
                // setErrorHandler(err.response.data.errors)
                setError(err.response.date)
            })
    }

    


    return (
        <div > 
            <Navb title="add book"/>
            <div  id='con'>
                <form onSubmit={(e)=>submitHandler(e)} >  
                    <div> 
                       {error.validationErrors&& <p>{error.name}</p> }
                    
                        <label htmlFor="">Title</label>
                        <br />
                        <input type="text" onChange={e=>setTitle(e.target.value)} className='form-control' id="t1" value={title} /> 
                        {/* {ErrorHandler.title && <p>{ErrorHandler.title.message}</p>} */}
                        {error.validationErrors&& <p>{error.validationErrors.title}</p> }
                        </div>
                    <div><label htmlFor="">Author Name</label>
                        <br />
                        <input type="text" onChange={e=>setOuthor_Name(e.target.value)} className='form-control'id="t1" value={outhor} />
                        {/* {ErrorHandler.outhor && <p>{ErrorHandler.outhor.message}</p>}  */}
                        {error.validationErrors&& <p>{error.validationErrors.outhor}</p> }

                        </div>
                    
                    <div><label htmlFor=""> Page Count</label>
                        <br />
                        <input type="number" onChange={e=>SetPge(e.target.value)} className='form-control'id="t1" value={page} /> 
                        {/* {ErrorHandler.page && <p>{ErrorHandler.page.message}</p>}  */}
                        {error.validationErrors && <p>{error.validationErrors.page}</p> }

                        </div>

                    <div className='mt-4'><label htmlFor=""> Is it Available?</label><input type="checkbox" checked={isAvailable} onChange={e=> setIsAvailable(e.target.checked)}  /> </div>
                    <button className='btn btn-dark '>Add Book!</button>
                </form>
            </div>

        </div>
    )
}

export default Addbooks