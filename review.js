const customers = require('./data/customers')


// console.log(customers[0]['profile'])



// console.log(customers[0]['profile']['address']['city'])


// console.log(customers[0].transactions)
let total = 0
// Iterating over customers
for(let customer of customers){
    // console.log(customer.transactions)
    // const transactions = customer.transactions
    // Iterating over each customer's transactions
    for(let transaction of customer.transactions){
        // console.log(transaction.products)
        // Iterating over the products array of each transaction
        for(let product of transaction.products){
            // console.log(product)
            total += product.priceInCents   
        }
    }
}

console.log(total)