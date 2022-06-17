// const getTip = (amount) => {
//     return amount * .25
// }

// console.log(getTip(true))


const getTip = (amount) =>{
    if(typeof amount === 'number'){
        return amount * .25
    }else{
        throw Error('Arguments must be number')
    }
}


try{
    console.log(getTip('test'))
}catch(e){
    console.log('catch block is running')
}