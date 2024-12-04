import express from "express" 
const app=express() 
const port=5000; 
import { faker } from "@faker-js/faker";
const cerateUser=()=>{ 
    const user={ 
        password: faker.internet.password() ,
        email:  faker.internet.email() ,
        phoneNumber: faker.phone.number(),
        lastName:  faker.person.lastName(), 
        firstName: faker.person.firstName(),
        id:faker.string.uuid() 
    }
    return user 
} 
const cerateComyany=()=>{ 
    const comyany={  
        id:faker.string.uuid(),
        name: faker.company.name() , 
        address:{ 
            street:faker.location.street(), 
            city:faker.location.city(),  
            state:faker.location.state(),  
            zipCode:faker.location.zipCode(),  
            country: faker.location.country()
        }
       
    } 
    return comyany
} 
app.get("/api/users/new" ,(rep,res)=>{
    res.json(cerateUser())
})
   
app.get("/api/companies/new" ,(rep,res)=>{
    res.json(cerateComyany())
}) 
app.get("/api/user/company" ,(rep,res)=>{
    res.json([cerateComyany(),cerateUser()])
}) 
   






























app.listen(port,()=>console.log("listening on port:"+port))