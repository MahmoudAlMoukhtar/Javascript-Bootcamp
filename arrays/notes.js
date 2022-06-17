//const notes = ['Note 1', 'Note 2', 'Note 3']
const notes = [{
    title: 'Cnote 1',
    body: 'test1'
}, {
    title: 'Bnote 2',
    body: 'test2'
}, {
    title: 'anote 3',
    body: 'test3'
}]

// notes.pop()
// notes.push('new note')
// notes.shift(0)
// notes.unshift('note 1')
/*notes.splice(1, 0, 'new note')
notes.splice(1, 1, 'new note')
notes[0] = 'new note 1'
 */

/*
notes.forEach(function(item, index){
    console.log(index)
    console.log(item)
})

console.log(notes.length)
console.log(notes)
console.log(notes.indexOf('Note 1'))*/

/////////////////////////////////////////
//counting.. 1
//counting.. 2

/*for(let count = 0; count <= 2; count++){
    console.log(count);
}

for (let count = 0; count <= notes.length - 1; count++ ){
    console.log(notes[count]);
}

for (let count = notes.length - 1; count >= 0; count-- ){
    console.log(notes[count]);
}*/
/////////////////////////////////////////
/*

console.log(notes.indexOf({})) //this well be false
console.log({} === {})
let object = {}
let otherObject = object
console.log(object === otherObject)*/


/*serching arrays part :|| */
/*console.log(notes.length)
console.log(notes)
const index = notes.findIndex(function(note, index){
    return note.title === 'note 1'
})
console.log(index)*/

/*const findIndex = function(object, noteTitle){
    return object.find(function(note, index){
        
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}*/

/*const findIndex = function(object, noteTitle){
    const index = object.findIndex(function(note, index){
        
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return object[index]
}*/

// let note = findIndex(notes, 'Note 1')
// console.log(note)

/*const printsNewArrays = function(object, filter){
    return object.filter(function(note){
        const isTitleMatch = note.title.toLowerCase().includes(filter.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(filter.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
     
}

console.log(printsNewArrays(notes, '3'))*/
// console.log(filterNotes)


const sortNote = function(object){
    object.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }else if(b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }else{
            return 0
        }
    })
}

sortNote(notes)
console.log(notes)