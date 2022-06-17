/*let restaurant = {
    name: 'Al-Zien',
    guestCapactiy:75,
    guestCount:0,
    check: function(partySize){
        let seatsLeft = this.guestCapactiy - this.guestCount
        return partySize <= seatsLeft
        
        
    }

    // addGuest: function()
}

let statue = restaurant.check(4)
console.log(statue)*/

let restaurant = {
    name: 'zein',
    guestCapacity: 75,
    guestCounts:0,
    check: function(partySize){
        // console.log(partySize)
        let seatsLeft = this.guestCapacity - this.guestCounts
        return seatsLeft >= partySize
    },

    seatParty: function(partySize){
        this.guestCounts = this.guestCounts + partySize
    },

    removeParty: function(partySize){
        this.guestCounts = this.guestCounts - partySize
    }
}

restaurant.seatParty(72)
console.log(restaurant.check(4));
restaurant.removeParty(5)
console.log(restaurant.check(4));
