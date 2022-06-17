let temp = 65;

//logical   AND   operator - true both sides are true , false otherwise
//logical   OR   operator - true if at least one side is true , false otherwise

/*if (temp >= 60 && temp <= 90){
    console.log('is nice to go out')
}else if (temp >= 90 || temp <= 0){
    console.log('is;nt nice not go out')
}else{
    console.log('eh, Do whate you want')
}*/



//challenge area
let isOneVegan = true;
let isTowVegan = false;
if(isTowVegan && isTowVegan){
    console.log('only offer up vegan dishes');
}else if(isOneVegan || isTowVegan){
    console.log('Make sure to offer up vegan dishes');
}else{
    console.log('anything on the menu');
}
