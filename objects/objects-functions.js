let book1 = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 500
}

let book2 = {
    title: 'A peoples Mistory',
    author: 'Howard Zinn',
    pageCount: 723
}


let getSummary = function(book){
    // console.log(`${book.title} by ${book.author}`) 
    return{
        summary: `${book.title} by ${book.author} `,
        pageCountSummary: `${book.title} is ${book.pageCount}` 
    }
}

let resulte1 = getSummary(book1);
let resulte2 = getSummary(book2);

console.log(resulte1.summary);
console.log(resulte2.summary);


//challenge area


let convert = function(fahrenheit){
    return{
        fahrenheit: fahrenheit,
        kelven: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}

let temp = convert(30)
console.log(temp);
console.log(temp.fahrenheit);
console.log(temp.celsius);
console.log(temp.kelven);