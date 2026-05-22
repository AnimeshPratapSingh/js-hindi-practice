const accountId = 12345
let accountEmail = "akshatsingh595@gmail.com"
var accountPassword = "12345"
accountCity = "pune"
let accountState;

// accountId = 4 not allowed

/*
prefer not to use var 
because of issue in block scope and functionl scope
*/

accountEmail = "123@gmail.com"
accountPassword = "3357"
accountCity = "bengeluru"

console.log(accountId)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])