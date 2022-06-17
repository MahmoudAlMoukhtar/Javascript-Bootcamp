class PersonClass{
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }

    getBio(){
        let bio = `Name: ${this.firstName} , Age: ${this.age} `

        this.likes.forEach((like) => bio += `/${this.firstName} likes ${like}, `)

        return bio
    }

    set fullName(fullName){
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
/*
const person1 = new PersonClass('Mahmoud', 'AlMoukhtar',  18, ['javaScript', 'React.js', 'Node.js'])
person1.setName('AlMoukhtar test')
console.log(person1.getBio())
// person1.firstName = 'test'
// console.log(person1.age)

const person2 = new PersonClass('Mahmoud Al-Moukhtar', 21)
// Person.prototype.getBio = function(){ return 'test' }
person2.setName('Andrew test')
console.log(person2.getBio())
*/


class personSubClass extends PersonClass{
    constructor(firstName, lastName, age, postion, likes, yearsWork){
        super(firstName, lastName, age, likes)
        this.postion = postion
    }

    getBio(){
        return `Name: ${this.firstName} ${this.lastName} is a ${this.postion}`
    }

    getYearsLeft(){
        let calc = 65 - this.age
        return `${this.firstName} ${calc} years to left`
        
    }
}

// const Employee = new personSubClass('Mahmoud', 'Al-Moukhtar', 18, 'Progarming',['javascript, react.js, node.js'])
// console.log(Employee)
// console.log(Employee.getBio())
// console.log(Employee.getYearsLeft())



class StudentSubClass extends personSubClass{
    constructor(firstName, lastName, age, grad){
        super(firstName, lastName, age)
        this.grad = grad
    }

    getBio(){
        const status = this.grad >= 70 ? 'passing' : 'failing'
        return `${this.fullName} is ${status}`
        // if(this.grad >= 70){
        //     return `${this.firstName}, ${this.lastName} is succeeded`
        // }else{
        //     return `${this.firstName}, ${this.lastName} is failing`
        // }
    }

    updateGrade(changeGrade){
        this.grad += changeGrade //this.grad = this.grad + changeGrade
    }
}


const student1 = new StudentSubClass('Mahmoud', 'Al-Moukhtar', 18, 70)
console.group(student1)
student1.fullName = 'test Al-Test'
console.group(student1.getBio())
student1.updateGrade(-20)
console.log(student1.grad)
console.group(student1.getBio())


// const Person = function (firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes

// }
// Person.prototype.getBio = function () {
//     let bio = `Name: ${this.firstName} , Age: ${this.age} `

//     this.likes.forEach((like)=> bio += `${this.firstName} likes ${like}, `)

//     return bio
// }

// // Person.prototype.Location = 'Damascuse'
// Person.prototype.setName = function(fullName){
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }

/*
const person1 = new Person('Mahmoud', 'AlMoukhtar',  18, ['javaScript', 'React.js', 'Node.js'])
// person1.getBio = function(){ return 'test' }
person1.setName('AlMoukhtar test')
// person1.firstName = 'test'
// console.log(person1.age)
console.log(person1.getBio())


const person2 = new Person('test', 21)

// Person.prototype.getBio = function(){ return 'test' }
console.log(person2.getBio())
*/