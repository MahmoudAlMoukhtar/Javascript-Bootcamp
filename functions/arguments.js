//Multiple arguments
/*slet add = function(a, b){
    console.log(a + b + c)

}

let resulte1 = add(10, 2, 3)
console.log(resulte1);*/

//default vakue to arguments

let getScore = function(name = 'nope', score = 0){
    // console.log(name);
    // console.log(score);
    return `Name: ${name} - Score:${score}`;
    // return 'Name: ' + name + ' -Score: ' + score;
    
}

// let scoreText = getScore('mahmoud', 100);
let scoreText = getScore(undefined, 100);
console.log(scoreText);


//challenge area

let calcute = function(total, tipPercent = .2){
     let percent = tipPercent * 100;
     let tip = total * tipPercent;
     return `A ${percent}% tip on $${total} would be $${tip}`  ;
    // return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}` ;
}

let TIP = calcute(40, .25);
// let TIP = calcute(100, .1);
console.log(TIP);




// let name = 'Mahmoud';
// let age = '18';

// console.log(`Name: ${name} - age: ${age}`);