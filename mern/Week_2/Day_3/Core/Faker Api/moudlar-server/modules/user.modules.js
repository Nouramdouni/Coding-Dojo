import { faker } from "@faker-js/faker";
const createUser=()=>{ 
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
const createCompany=()=>{ 
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