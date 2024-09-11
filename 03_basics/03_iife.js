//Immediately Invoked Function Expressions (IIFE)
//global declaration ke pollution se bachne/hatane k liye we use iife

(function chai(){
    console.log(`DB CONNECTED`);
}) () ; //HAVE TO GIVE THIS ; SO AS TO TELL WHEN TO END

( () => {
    console.log(`DB CONNECTED TWO `);
} )(); 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('amarboss')

