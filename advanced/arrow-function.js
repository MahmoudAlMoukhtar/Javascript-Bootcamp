const squer = function(num){
    return num * num
}

console.log(squer(5))

const squer2 = (num2) => num2 * num2 
console.log(squer2(5))
const people = [{
    name: 'Mahmoud',
    age: 18
}, {
    name: 'Mahmoud',
    age: 40
}, {
    name: 'test',
    age: 18
}]
/*
people.filter(function(person){
    return person.age < 30
})
*/
/*
people.filter((person) =>{
    return person.age < 30
})
*/
//this is perfecter way
console.log(people.filter((person) => person.age < 30)) 


const age18 = people.find((person2) => person2.age === 40)
console.log(age18.name)