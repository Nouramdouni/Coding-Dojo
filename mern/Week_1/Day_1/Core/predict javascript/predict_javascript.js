/** problem1 */
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars // tesla 
const [ ,otherRandomCar ] = cars // mercedes 
console.log(randomCar) // = tesla 
console.log(otherRandomCar) //mercdes 
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
because the password is not endifend   */ 
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
/** Paul was foundat index 0  
 * george was found at index 1 
 * jouhn was found at index 2 
 * reing was found at index 3  
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


