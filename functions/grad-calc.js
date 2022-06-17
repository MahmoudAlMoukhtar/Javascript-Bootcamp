// students score, total possible score
// 15/20 --> you got a c (75%)!
// A 90-100, B 80-89, C 78-79, D 60-69, F 0-59

/*let StudentScore = function(score){ //that is before correct my solution 
    if(score >= 90){
        return `You got a A ${score}%`
    }else if(score <= 89 && score >= 80){
        return `You got a B ${score}%`
    }else if(score <= 79 && score >= 70){
        return `You got a C ${score}%`
    }else if(score <= 69 && score >= 60){
        return `You got a D ${score}%`
    }else if(score <= 59 && score >= 0){
        return `You got a F ${score}%`
    }
}

let resulte = StudentScore(1);
console.log(resulte)*/

const StudentScore = function(score, total){ //that is after correct my solution 

    // let percent = score / total * 100 ;
    // if(percent >= 90){
    //     return `You got a A (${percent})%`
    // }else if(percent >= 80){
    //     return `You got a B {${percent})%`
    // }else if(percent >= 70){
    //     return `You got a C (${percent})%`
    // }else if(percent >= 60){
    //     return `You got a D (${percent})%`
    // }else if(percent >= 0){
    //     return `You got a F (${percent})%`
    // }

    //or this method -->
    /*
if(typeof score === 'number' && typeof total === 'number'){
    const percent = score / total * 100 ;
    let letterGrad = '';
    if(percent >= 90){
        letterGrad = 'A'
    }else if(percent >= 80){
        letterGrad = 'B'
    }else if(percent >= 70){
        letterGrad = 'C'
    }else if(percent >= 60){
        letterGrad = 'D'
    }else if(percent >= 0){
        letterGrad = 'F'
    }
    return `You get a ${letterGrad} (${percent}%)!`
}else{
    throw Error('this is Error!!!')
}
   
}

try{
    const resulte = StudentScore(0.5, 'test');
    console.log(resulte);
}catch{
    console.log(e.message)
}
*/
if(typeof score !== 'number' || typeof total !== 'number'){
    throw Error('this is Error!!!')
}

    const percent = score / total * 100 ;
    let letterGrad = '';
    if(percent >= 90){
        letterGrad = 'A'
    }else if(percent >= 80){
        letterGrad = 'B'
    }else if(percent >= 70){
        letterGrad = 'C'
    }else if(percent >= 60){
        letterGrad = 'D'
    }else if(percent >= 0){
        letterGrad = 'F'
    }
    return `You get a ${letterGrad} (${percent}%)!`
}

try{
    const resulte = StudentScore(0.5, 'test');
    console.log(resulte);
}catch(e){
    console.log(e.message)
}
