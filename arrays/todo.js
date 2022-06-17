const todos = [{

    title: 'finish section array',
    completed: true
}, {
    title: 'watch tutorial css',
    completed: false
}, {
    title: 'creat new website using html & css',
    completed: true
}, {
    title: 'creat new website using html & css',
    completed: false
},{
    title: 'creat new website using html & css',
    completed: false
},{
    title: 'creat new website using html & css',
    completed: true
}]
/*
const deleteTodo = function(object, todoTitle){
    const index = todos.findIndex(function(todo){
        return todo.title.toLowerCase() === todoTitle.toLowerCase()
    })
        // console.log(index); 
    if(index > -1){
    object.splice(index, 1)
    }
    
}


deleteTodo(todos, 'Watch Tutorial Css')
console.log(todos)*/


// const todos = ['finish section array', 'watch tutorial css ', 'creat new website using html & css', 'Read and practice new features and methods']
//console.log(todos);
// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[todos.length - 2]}`)

/*todos.splice(2,1)
todos.push('test note')
todos.shift()

console.log(`You have ${todos.length} todos!`);

todos.forEach(function(item, index){
    const num = index + 1 ; 
    console.log(`${num}. ${item}`)
})*/
// console.log(todos)


/* for (let count = 0; count < todos.length; count++ ){
    let num = count + 1;
    console.log(`${num}. ${todos[count]}`);
}



for (let count = todos.length - 1; count >= 0; count-- ){
    let num2 = count + 1; 
    console.log(`${num2}. ${todos[count]}`);
}*/


/*const findTodo = function(object){
    return object.filter(function(todo){
        // const titleMatch = todo.title.toLowerCase().includes(filter.toLowerCase())
        const completedMatch = todo.completed
        // return  completedMatch === false
        return  !completedMatch

    }) 
}
console.log(findTodo(todos))*/


const sortTodo = function(object){
    object.sort(function(a, b){
        if(!a.completed && b.completed){
            return -1
        }else if(!b.completed === false && a.completed){
            return 1
        }else{
            return 0
        }
    })
}
sortTodo(todos)
console.log(todos)