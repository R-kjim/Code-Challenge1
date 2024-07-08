//function that prompts the user to input speed and prints an output

let prompt=require('prompt-sync')();
function gradeCriteria(){
    //prompt the user to enter marks scored
    let marks=parseInt(prompt('Kindly enter the marks scored: '))

    //the function block runs on the marks input to return an output
    if (marks>79 && marks<=100){
        console.log( 'Grade: A');
    }else if(marks>=60 && marks<=79){
        console.log( 'Grade: B');
    }else if(marks>=50 && marks<60){
        console.log( 'Grade: C');
    }else if (marks>=40 && marks<50){
        console.log( 'Grade: D');
    }else if(marks>=0 && marks<40){
        console.log( 'Grade: E');
    }else{
        console.log( 'INVALID MARKS!')//invalidates marks out of range(0-100)
    };
}
gradeCriteria()