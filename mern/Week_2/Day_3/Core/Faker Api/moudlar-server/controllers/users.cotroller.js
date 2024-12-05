import {createUser ,createCompany} from "../modules/user.module"

const userController={
    ReadUser:(req,res)=>{
    res.json(createUser())
    },
    ReadCompany:(req,res)=>{
        res.json(createCompany())
    },
    ReadAll:(req,res)=>{
        res.json([createUser(),createCompany()])
    }
}

export default userController