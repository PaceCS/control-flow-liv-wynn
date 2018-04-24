// evenOddExtended takes an input userInput and determines if it is an even number
function evenOddExtended(userInput) {
    // First remind the user what number they entered
    console.log(userInput);

    // Next fill in the condition to determine if the input is actually an integer
    if (userInput.isInteger()) {
        // If the input is an integer, fill in the condition to determine if it is positive
        if (userInput % 2 == 0) {
            // If the input is a positive integer, fill in the condition to determine if it is even
            if (userInput % 2 == 0) {
                console.log( 'You entered' + userInput + '.'
                'Your input is not an integer.');
            } else {
                console.log('You chose ' + userInput);
            }
        } else {
            console.log();
        }
    } else {
        console.log();
    }
}


//Try out your function here.
evenOddExtended(4);
evenOddExtended(5);
evenOddExtended(3.1);
evenOddExtended('Hi');















// -------------------------------------------------------------------------------
// Testing - DON'T CHANGE ANYTHING BELOW
const printme = console.log;
let out = [];
console.log = function log(d) {
    out.push(d);
};
evenOddExtended(2);
printme('\n Testing...');
printme(`\t did you properly return the user input?\t ${out[0] == 'You entered 2.'} `);
const a = [3.1, -3, 3, 4];
for (let i = 0; i < a.length; i += 1) {
    out = [];
    evenOddExtended(a[i]);
    const t = a[i] % 2 == 0 ? 'even' : 'odd';
    if (parseInt(a[i]) != a[i]) {
        printme(`\t did you properly return a statement for non-integer values?\t ${out[1] == 'Your input is not an integer.'}`);
    } else if (a[i] < 0) {
        printme(`\t did you properly return a statement for negative values?\t ${out[1] == 'Your number is not a positive number.'}`);
    } else {
        printme(`\t did you properly return a statement for ${t} values?\t ${out[1] == 'Your number is ' + t + '!'}`);
    }
}
