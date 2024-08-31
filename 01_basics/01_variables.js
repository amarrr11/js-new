const accountId=122232
let accountEmail="amarbaba@google.com"
var accPassword="12112"
accountCity="Jaipur" 

let accountState; //undefined

///accountId=2 //not allowed

accountEmail="gc@gc.com"
accPassword="1222112"
accountCity="mumbai"

//prefer not to use var because of issue in block scope and functional scope.

console.table([{ accountEmail, accPassword, accountId, accountState, accountCity }]);

// Use console.table with an object
console.table({ accountEmail, accPassword, accountId, accountState, accountCity });


// Use console.table with an array of arrays
console.table([
    ["accountEmail", accountEmail],
    ["accPassword", accPassword],
    ["accountId", accountId],
    ["accountState", accountState],
    ["accountCity", accountCity],
  ]);