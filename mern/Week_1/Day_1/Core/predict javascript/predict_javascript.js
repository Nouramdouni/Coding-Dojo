/** problem1 */
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars // tesla ///  the first element of the cars array ('Tesla') 
const [ ,otherRandomCar ] = cars // mercedes/// the second element of the cars array ('Tesla')  
console.log(randomCar) // = tesla 
console.log(otherRandomCar) //=mercdes  
//
/** problem 2  */ 
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
console.log(otherName);
/** Elon */
console.log(employeeName);
/** empolyeenName is not defined  */  
// To fix this error you will write <"console.log (empolyee.empolyeeName)>"
/**problem 3  */  
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);
// "12345"
console.log(hashedPassword);
/* undefined 
in the  first console.log    
No problem return  '12345' 
bat in the second will have problem 
because the password is not endifend in the persson */ 
// We add password in the preson  
/**const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet', 
    password = '12345'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);  
console.log(hashedPassword);*/
/**problem4 */
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;// 2
const [,,,second] = numbers;//5
const [,,,,,,,,third] = numbers;//2
console.log(first === second);
// first=2 and second=5   
// return fasle
console.log(first === third); 
// first=2 and third=2 
// return True 
/**  Problem 5 */ 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);// value
console.log(secondKey); //[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//1
console.log(willThisWork);//5
/** Problem 6 */ 
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

/** Paul was found at index 0
George was found at index 1
John was found at index 2
Ringo was found at index 3
name and index after loop is Ringo:4
/** problem7 */ 
function actuallyPrintingNames() {
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}     

/*   will  not creat  actuallyPrintingNames(?)  
and  name and index didn' t excite  
we need to console.log(actuallyPrintingNames()) 

function actuallyPrintingNames(names) { 
  let index , name
  for ( let index = 0; index < names.length; index++) {
     name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}     
console.log(actuallyPrintingNames("aaaa")) 
because */ 
/** problem 8  */  
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);  
/*  creat name +was found at index + index ( name in array )
/**Paul was found at index 0
George was found at index 1
John was found at index 2
Ringo was found at index 3
 */

/** problem 9  */ 
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet} 
console.log(planet.composition[0] === planetCopy.composition[0])  
/* will return True */
console.log(planet === planetCopy)  
/** will reutrn False  */


