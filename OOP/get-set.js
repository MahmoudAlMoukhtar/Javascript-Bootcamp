const data = {
    // location: ''
    locations: [],
    get location(){
        return this._location
    },
    set location(value){
        this._location = value.trim()
        this.locations.push(this.location)
    } 
}

data.location = '     Damascuse      '
data.location = '     test      '
console.log(data.location)
console.log(data.locations)