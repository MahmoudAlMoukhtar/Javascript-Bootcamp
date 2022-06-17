const account = {
    name: 'Mahmoud Al-Moukhtar',
    Expenses: [],
    incomes: [],

    
    adddExpense: function(description, amount){
        this.Expenses.push(
            {
                description: description,
                amount: amount
            }
        )
    },

    addIncome: function(description, amount){
        this.incomes.push(
            {
                description: description,
                amount: amount
            }
        )
    },

    getSammary1: function(){
        let NAME = this.name
        let totalExpense = 0
        let totalIncome = 0
        let balance = 0

        this.Expenses.forEach(function(expense){
            totalExpense = totalExpense + expense.amount
        })

        this.incomes.forEach(function(incom){
            totalIncome = totalIncome + incom.amount
        })
        balance = totalIncome - totalExpense
        return `${NAME} has $${balance},$${totalIncome} in incomes, $${totalExpense} in expenses`
    }
    
}

account.adddExpense('coffee', 50)
account.adddExpense('Tee', 40)
account.addIncome('test1', 100)
console.log(account.getSammary1())



