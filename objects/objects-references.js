let myAccount = {
    name: 'Mahmoud',
    expenses: 0,
    income: 0
}

/*let otherAccount = myAccount
otherAccount.income = 1000
otherAccount = {}*/


let addIncome = function(account, plusIncome){
    account.income = account.income + plusIncome
}

let adddExpense = function(account, plusExpenses){
    account.expenses = account.expenses + plusExpenses
}

let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance} $${account.income} in income. $${account.expenses} in expenses.`
}

let resetAccount = function(account){
    account.income = 0
    account.expenses = 0
}


addIncome(userAccount, 1000)
adddExpense(userAccount, 50)
adddExpense(userAccount, 50)
console.log(getAccountSummary(userAccount)) 
resetAccount(userAccount)
console.log(getAccountSummary(userAccount)) 



/*
let myyAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
    }
    let adddExpense = function (account, amount) {
    account = {
        age: 5,
        namme: 'asd',
        number: 654
    }
    // account.age = 1
    // account.namme = 'Mahmoud'
    // account.number = 122
    console.log(account)
    }
    adddExpense(myyAccount, 2000)
    console.log(myyAccount)*/




    