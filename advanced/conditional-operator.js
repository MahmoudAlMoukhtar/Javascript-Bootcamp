/*
const myAge = 18;
let message = myAge >= 18 ? 'You can vote' : 'You cannot vote'

// if(myAge >= 18){
//     message = 'You can vote'
// }else{
//     message = 'Yoy cannot vote'
// }

console.log(message);
*/
/*
const myAge = 18
const firstFunction = () => {
    console.log('function1111');
}


const secondFunction = () => {
    console.log('function2222');
}

const message = myAge >= 18 ? firstFunction() : secondFunction()
console.log(message);
*/
const function1 = () => {
    console.log(`Team size: ${array.length}`)
}

const function2 = () => {
    console.log(`Too many people in your team is ${array.length}`)
}
const array= ['test1', 'test1', 'test1', 'test1'] 
array.length < 4 ? function1() : function2()


