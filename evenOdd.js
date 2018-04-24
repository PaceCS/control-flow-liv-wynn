// evenOdd takes an input userInput and determines if it is an even number
function evenOdd(userInput) {
    // First remind the user what number they entered
    console.log(userInput);

    // Now fill in the condition to determine whether the number is even
    if (userInput%2 == 0) {
        // If it satisfies the condition, then give the user the appropriate response
        console.log(userInput "is an even number");
    } else {
        // Otherwise, give the alternative response
        console.log(userInput "is an odd number");
    }
}


//Try out your function here.
evenOdd(4);
evenOdd(5)





















// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
evenOdd(2);
printme('\n Testing...');
printme(`\t did you properly return the user input?\t ${out[0] == 'You entered 2.'} `);
const a = [3, 4];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    evenOdd(a[i]);
    const t = a[i] % 2 == 0 ? 'even' : 'odd';
    printme(`\t did you properly return a statement for ${t} values?\t ${out[1] == 'Your number is ' + t + '!'}`);
}
