//lexical scope (static scope)
//Global scope - defined outside of all code blocke
//Local scope - defined inside a code blocke

//in a scope you can access variables defined in that scope, or in aany parent/and


//Golbal scpe (varone)
    //Local scpe (vartwo)
        //local scope (varfour)
    //Local scpe (varthree)

let varone = 'varone';

if(true){
    console.log(varone)
    let vartwo = 'vartwo';
    console.log(vartwo);

    if(true){
        let varfour = 'varfour';
        console.log(varfour);
    }
}

if(true){
    let varthree = 'varthree';
    console.log(varthree);
}

console.log(vartwo);