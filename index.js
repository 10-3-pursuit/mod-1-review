const customers = require('./data/customers')
const tickets = require('./data/tickets')
// console.log(customers)
// console.log(tickets)

const firstCustomer = customers[0]
const secondCustomer = customers[1]
// console.log(firstCustomer)
// console.log(firstCustomer.username)
// console.log(firstCustomer.profile)
// console.log(firstCustomer.profile.name)
// console.log(firstCustomer.profile.name.first)
// console.log(firstCustomer.profile.address)
// console.log(firstCustomer.profile.address.city)



// Write a function that takes in a customer object and returns that customer's first and last name in a string
// => 'Lucille Bradshaw'

function customerName(customer){
    // customer in the parameters represents any object that gets passed to this function. Down below we have firstCustomer and secondCustomer being passed to this function as an argument


    // customer.profile.name.first
    // customer.profile.name.last  
    // return `${customer.profile.name.first} ${customer.profile.name.last}`

    // Can mix and match dot notation and bracket notation
    // return `${customer['profile'].name.first} ${customer['profile']['name']['last']}`

    return customer.profile.name.first + ' ' + customer.profile.name.last
}
// console.log(customerName(firstCustomer))
// customerName(secondCustomer)

// I call customerName() on firstCustomer
// Function call evaluates to 'Lucille' (bc that is what it returns)
// 'Lucille' get assigned to firstCustomerFullName
// const firstCustomerFullName = customerName(firstCustomer)
// console.log(firstCustomerFullName)




// Nested Loops
// console.log(firstCustomer.transactions[0].associate.name.first)

// Single loop that prints out every customer's first name
// for(let customer of customers){
//     // console.log(customer.profile.name.first)
// }


// For loop prints out each customer's name and the array of their transactions
// for(let customer of customers){
//     // console.log(customer.transactions.length)
//     console.log(`${customer.profile.name.first}'s Transactions`)
    // console.log(customer.transactions)
// }


// Nested loop iterates over customers, prints out each customer's first name
// Then iterates over each customer's transactions and prints out each one
// for (const customer of customers) {

    // Put if statement in order to check if name is Zelma
    // if(customer.profile.name.first === 'Zelma'){
    //     // if it is:
    //     // continue will skip this iteration
    //     continue
    // }

    // if(customer.profile.name.first === 'Zelma'){
    //     // if it is:
    //     // break will take us out of the loop
    //     break
    // }

//     console.log(customer.profile.name.first)
//     for (const tx of customer.transactions) {
//         console.log(tx)
//     }
// }



// Three loops nested within one another:
// Outer loop iterates over customers
// First Inner loop iterates over the transactions for each customer
// Second Inner loop iterates over the products for each transaction
// for(let customer of customers){
//     // customer.transactions is the array of transactions for each customer
//     for(let tx of customer.transactions){
//         // tx.products is the array of products for each tx
//         for(let product of tx.products){
//             console.log(product.productName)

//         }
//     }
// }



function productsTotal(customersArr){
    let acc = 0

    for(let customer of customersArr){
        // customer.transactions is the array of transactions for each customer
        for(let tx of customer.transactions){
            // tx.products is the array of products for each tx
            for(let product of tx.products){
                // console.log(product.productName)
                // Adds in all the products' priceInCents for every tx for every customer
                acc += product.priceInCents
            }
        }
    }

    return acc
}

// console.log(productsTotal(customers))


// Using a variable to key into object


// console.log(tickets.general)
// console.log(tickets['general'])


let key = 'general'
// 'key' is literally being read as 'key'
// In order to use a variable to grab a key from an object, you need to use bracket notation
// console.log(tickets.key) // => undefined - bc 'key' is not a property inside of tickets

// console.log(tickets['key']) // => undefined bc there are quotes around the variable name which makes it read as a string

// console.log(tickets[key]) // => {description: 'General Admission', priceInCents: { child: 2000, adult: 3000,senior: 2500 }}


// You can mix and match bracket notation and dot notation BUT variables used as keys must be in BRACKET NOTATION
function printValue(ticketsObj, key, age){
    console.log(ticketsObj[key].priceInCents[age])
    // console.log(ticketsObj[key]['priceInCents'][age])
    
}


// printValue(tickets, 'membership')
printValue(tickets, 'general', 'senior')