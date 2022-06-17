let num = 183.941 ;

console.log(num.toFixed(2));

console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

let min = 10;
let max = 20;

let random = Math.floor(Math.random() * (max - min + 1 )) + min ;
console.log(random);

//challenge area
let makeGuess = function(number){
    let min = 1;
let max = 5;

let random = Math.floor(Math.random() * (max - min + 1 )) + min ;
console.log(random);
return random === number ;
}

console.log(makeGuess(1));