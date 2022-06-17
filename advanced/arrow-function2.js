/*
// this is return 23 because regular function bound arguments
const add = function(a, b){
//  return arguments
return arguments[0] + arguments[1]
}

console.log(add(11, 12, 13, 14))
*/

//this is not return any thing because arrow function not bind arguments
/*
const add = () => {
    return arguments[0] + arguments[1]
}
console.log(add(11, 12, 13, 14))
*/
// this is return true output
const car = {
  color: "red",
  getSummary() {
    return ` the color car is ${this.color}`;
  },
  /*
    //this deffrent way to defind method
    getSummary: function(){
        return ` the color car is ${this.color}`
    }
    */
};

console.log(car.getSummary());
//this is return undefind becuase arrow function not bind this
const car2 = {
  color: "red",
  getSummary: () => {
    return ` the color car is ${this.color}`;
  },
};

console.log(car2.getSummary());
