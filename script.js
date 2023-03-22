// Create a JavaScript function called "multiplicationTable" that takes a single argument "num" (an integer) as input.
// Inside the function, create a for loop that iterates from 1 to 10.
// Inside the loop, multiply the current iteration number by the input "num" to generate the product.
// Log the product to the console in the format "num x iteration = product".
// Test the function with different input numbers to generate multiplication tables.


function multiplicationTable(num) {
    
    for (var i=1; i<=10; i++){
        var prod=num*i;
        console.log(num+" x "+i+" = "+ prod+ " ");
    }
    
}
    multiplicationTable(5);


// for taking input from user
    
/* function multiplicationTable(num) {
    
    for (var i=1; i<=10; i++){
        var prod=num*i;
        document.write(num+" x "+ i+" = "+ prod+ "<br>");
    }
}
let num;
do{ 
    num = parseInt(prompt("Enter an integer number:")); 
} while (isNaN(num)); 
    multiplicationTable(num); */
