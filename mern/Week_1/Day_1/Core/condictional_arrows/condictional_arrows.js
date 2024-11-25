let problem1=(age)=>{ 
        return (age>17) ?"You are good to go":"sorry! you must be 18 or older!"; }
console.log(problem1(17)) 
console.log(problem1(19))
/***************PROBLEM 2******************** */ 
let problem2=(raninig)=>
{ 
    return (raninig==true) ?"get your rain jacket!":"No rain on today frocast!"; }
console.log(problem2(true)) 
console.log(problem2(false))
/******************PROBLEM 3*****************************/ 
let problem3=(number)=>{ 
    return (number%2==0)? "That's an even number!!!": "That's an odd number!";
}
console.log(problem3(4))
console.log(problem3(5))
/*******************PROBLEM 4*********************************** */ 
let problem4=(a,b)=>{ 
    return (a>b)? `<<${a}>> is more than <<${b}>>!`: `<<${a}>> is less than <<${b}>>! ` ;
} 
console.log(problem4(3,4)) 
console.log(problem4(10,4))