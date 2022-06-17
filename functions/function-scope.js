//Global scope(convertFtoC, tempone, temptwo)
//Local scope(tempFahrenheit, celsus)
    //LOCAL SCOPE ()

let convertFtoC = function(tempFahrenheit){
    let celslus =(tempFahrenheit - 32) * 5 / 9;

    if( celslus <= 0 ){
        let isFreezing = true;
        console.log(isFreezing);
    }
    return  celslus ;

    
}


// console.log(celslus)
// console.log(tempFahrenheit)
let value = convertFtoC(0);
let otherValue = convertFtoC(68);
console.log(value);
console.log(otherValue);