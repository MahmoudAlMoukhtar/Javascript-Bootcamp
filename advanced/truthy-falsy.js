const prodacts = []
const prodact = prodacts[0]

if(prodact){
    console.log('Truthy')
}
//this is truthy
if('test prodact'){
    console.log('this is exist') 
}else{
    console.log('this is not exist')
}
// this is truthy
if([]){
    console.log('this is exist') 
}else{
    console.log('this is not exist')
}
// this is truthy
if({}){
    console.log('this is exist') 
}else{
    console.log('this is not exist')
}

///////////////////////////////////////////
//this is falsy
if(0){
    console.log('this is exist') 
}else{
    console.log('this is not exist')
}
//this is falsy
if(undefined){
    console.log('this is exist') 
}else{
    console.log('this is not exist')
}
//this is falsy
if(''){
    console.log('this is exist') 
}else{
    console.log('this is not exist')
}
//this is falsy
if(null){
    console.log('this is exist') 
}else{
    console.log('this is not exist')
}

if(NaN){
    console.log('this is exist') 
}else{
    console.log('this is not exist')
}

