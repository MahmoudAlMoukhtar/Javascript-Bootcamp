//undefined for variable

let name ;

if(name === undefined){
    console.log('please enter your name');
}else{
    console.log(name)
}
////////////////////////////////////////////////
//undefined for if argument

let square = function(num){
    console.log(num)
}

square()

//////////////////////////////////////////////////

//undefined as function return defult value
let square = function(num){
    console.log(num);
}

let result = square();
console.log(result)

///////////////////////////////////////////////////

let age = null ;
console.log(age)