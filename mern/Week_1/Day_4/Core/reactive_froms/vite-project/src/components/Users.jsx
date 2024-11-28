import React from 'react'
import { useState } from 'react'

const Users = () => {

    const [firsrtname, setFirstname] = useState("") ;
    const [firsrtnameError, setFirstnameError] = useState("");

    const [lastname, setLastname] = useState("") ;
    const [lastnameError, setLastnameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setemailError] = useState("");

    const [password, setPassword] = useState("") ;
    const [passwordError, setPasswordError] = useState("");

    const [conf_passwored, setConf_passwored] = useState("") ;
    const [conf_passworedError, setconf_passworedError] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [users, setusers] = useState([]);

    const validefirsrtname = (e) => {
        setFirstname(e.target.value)
        if (e.target.value.length < 3) {
            setFirstnameError("name must be 3 characters or longer!");
        }
        else {
            setFirstnameError("");
        }

    }
    
    const validelastname = (e) => {
        setLastname(e.target.value)
        if (e.target.value.length < 3) {
            setLastnameError("name must be 3 characters or longer!");
        }
        else {
            setLastnameError("");
        }

    }
    const validemail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 8) {
            setemailError("email must be !");
        }
        else {
            setemailError("");
        }

    }
    const validepassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length<8 && isNaN(e.target.value)) {
            setPasswordError("password att 8!☹");
        }
        else {
            setPasswordError("");
        }

    }
    const valideconf_passwored = (e) => {
        setConf_passwored(e.target.value)
        if (e.target.value != password) {
            setconf_passworedError("name must be 3 characters or longer!");
        }
        else {
            setconf_passworedError("");
        }

    }

    const SubmitUser = (e) => {
        e.preventDefault(); // !!!!!!!!!!!!!!!!!!!haje metseche!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 

        setusers([...users,{ firsrtname, lastname, email, password, conf_passwored }]);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConf_passwored("");
        setHasBeenSubmitted(true);
    }
    const message = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form ;)!!";

        }
        else {
            return "Welcome.Please submit the from :)";
        }
    }
   
    return (
        <>
            <form onSubmit={SubmitUser}>
                <h3>{message()}</h3>
                <div>
                    <label>First name</label>
                    <input value={firsrtname} onChange={ validefirsrtname } />
                    {
                        firsrtnameError ?
                            <p>{firsrtnameError}</p> :
                            " "
                    }
                </div>
                <div>
                    <label>Laste name</label>
                    <input value={lastname} onChange={ validelastname } />
                    {
                        lastnameError ?
                            <p>{lastnameError}</p> :
                            " "
                    }
                </div>
                <div>
                    <label> Email password </label>
                    <input value={email} onChange={validemail } />
                    {
                        emailError ?
                            <p>{emailError}</p> :
                            " "
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input value={password} onChange={ validepassword } />
                    {
                        passwordError ?
                            <p>{passwordError}</p> :
                            " "
                    }
                </div>
                <div>
                    <label>confirme Password</label>
                    <input value={conf_passwored} onChange={ valideconf_passwored } />
                    {
                        conf_passworedError ?
                            <p>{conf_passworedError}</p> :
                            " "
                    }
                </div>

                <div> <button>Create User</button></div>
                <div>
                    <h3>Users</h3>
                    {users.map=((users,index)=> <p key={index}>{users.firsrtname}{users.lastname}{users.email}</p> )}
                    </div>
            </form>
        </>
    )
}

export default Users