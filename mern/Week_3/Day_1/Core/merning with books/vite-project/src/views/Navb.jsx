import React from 'react'
import { Link } from 'react-router-dom' 
import "../style/Cart.css"

const Navb = ({title}) => {
    return (
        <div> 
            
            <div className='nav'>
                <div className='b'><Link to="/"  className='text-decoration-none rounded-pill btn btn-primary'> Catalog</Link> 
                    <br />
                     <Link to="/create" className='text-decoration-none btn rounded-pill btn-primary' > Add Book</Link>
                </div>
                <div className='h1'><h1>{title}</h1></div>
            </div>
        </div>
    )
}

export default Navb