/*let namee = '  Mahmoud Al-Moukhtar  '

//Length property
console.log(namee.length)

// Convert to upper case

console.log(namee.toUpperCase())

// Convert to Lower case
console.log(namee.toLowerCase())

// Includes methods
let password = 'abcpassword999'
console.log(password.includes('password'))

//Trim
console.log(namee.trim())*/


//callenge area


// first Way (befor view solution)
let isValidPassword = function(password){
    
    return password.length > 8 && !password.includes('password')
}

// second way
/*let isValidPassword = function(password){
    if(password.length > 8 && !password.includes('password')){
        return true
    }else{
        return false
    }
    
}*/

console.log(isValidPassword('asdd'))
console.log(isValidPassword('abvc123asdasdasdasdas'))
console.log(isValidPassword('asdfpassword')) 
