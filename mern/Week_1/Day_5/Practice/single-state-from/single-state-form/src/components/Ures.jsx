import React from 'react'
import { useState } from 'react'
 
const Ures = () =>  
    { 
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })




    const changeHandler = (e) => {

        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value
        })
        )

    }
  
   

   
    return (
        <div>
            <form>
                <div>
                    <label >First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div>
                    <label >Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div>
                    <label >Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div >
                    <label  >Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div >
                    <label htmlFor="confirmPassord">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
            </form>

            <div >
                <h3>Your Form Data</h3>
                <p>
                    <label>First Name: </label>{user.firstName}
                </p>
                <p>
                    <label>Last Name: </label>{user.lastName}
                </p>
                <p>
                    <label>Email: </label>{user.email}
                </p>
                <p>
                    <label>Password: </label>{user.password}
                </p>
                <p>
                    <label>Confirm Password: </label>{user.confirmPassword}
                </p>
            </div>
        </div>
    )
}

export default Ures  

















































////   fi weth3eye hathi yelzem ethot name emt3e kol haje bech  etnjem te5dem ou ethay3ech rouhekk  
// :)))))))))))))))))))))))))))))))))))))))))))))))))))))))))))