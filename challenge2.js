//function that takes in the speed of a car and prints an output
function speedTest(speed){
    if(speed<=70){
        console.log('Ok')
    }
    
    else if(speed>70){
        //declare variables to enable navigating through the nested if condition 
        excess=speed-70
        points=(excess-excess%5)/5
        //nest an if condition inside another so we introduce the conditions that fall under speed greater than 70
        if(points<=12){
            console.log(`Points:${points}`)
        }else{console.log('License suspended')}
        
    }
    
}