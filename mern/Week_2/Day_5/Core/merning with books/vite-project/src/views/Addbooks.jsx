import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


const Addbooks = () => {
    const [title, setTitle] = useState("");
    const [author_Name, setAuthor_Name] = useState("");
    const [page, SetPge] = useState(0);
    const [celebrityStatus, setCelebrityStatus] = useState(false);
    const navigate = useNavigate()



    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/book", {
            title,
            author_Name,
            page,
            celebrityStatus
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
    }
    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const author_NameHandler = (e) => {
        setAuthor_Name(e.target.value)
    }

    const pageHandler = (e) => {
        SetPge(e.target.value)
    }


    const celebrityStatusHandler = (e) => {
        setCelebrityStatus(e.target.value)
    }





    return (
        <div><form method="post" >
            <label htmlFor="">Title</label>
            <input type="text" onChange={titleHandler} value={title} />
            <label htmlFor="">Author Name</label>
            <input type="text" onChange={author_NameHandler} value={author_Name} />
            <label htmlFor=""> Page Count</label>
            <input type="number" onChange={pageHandler} value={page} />
            <label htmlFor=""> Is it Available?</label><input type="checkbox" onChange={celebrityStatusHandler} value={celebrityStatus} />
            <button type="button">Add Book!</button>
        </form>

        </div>
    )
}

export default Addbooks