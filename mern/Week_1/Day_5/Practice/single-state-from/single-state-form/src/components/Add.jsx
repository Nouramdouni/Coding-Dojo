import React from 'react'
import { useState } from 'react'

const Add = (props) => {
    // const [firsrtname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [conf_passwored, setConf_passwored] = useState("");  

   
    const [user, setUser] = useState({
        firsrtname: "",
        lastname: "",
        setEmail: "",
        email: "",
        password: "",  
        conf_passwored:""

    })
    const changeHandler = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value
        }))
        return (
            <div>
                <form>
                <div >
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="confirmPassord">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        onChange={(e) => changeHandler(e)}
                    />
                </div>
            </form>

                <div>

                    <p>
                        <label>First Name: </label>{user.firsrtname}
                    </p>
                    <p>
                        <label>Last Name: </label>{user.lastname}
                    </p>
                    <p>
                        <label>Email: </label>{user.email}
                    </p>
                    <p>
                        <label>Password: </label>{user.password}
                    </p>
                    <p>
                        <label>Confirm Password: </label>{user.conf_passwored}
                    </p>
                </div>
            </div>


        )
    }
}
export default Add

