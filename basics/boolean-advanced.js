// let isAccountLocked = true;
//let isAccountLocked = false;

// if (isAccountLocked){
//     console.log('is account locked')
// }else{
//     console.log('welcome!')
// }


let isAccountLocked = false;
let userRole = 'user'
if (isAccountLocked){
    console.log('is account locked')
}else if (userRole === 'admin'){
    console.log('welcom admin!')
}else{
    console.log('welcome!')
}

//challenge area

let temp = 45;

if ( temp >= 45 ){
    console.log('is hot');
}else if (temp <= 0) {
    console.log('is freezing')
}else{
    console.log('is nice')
}