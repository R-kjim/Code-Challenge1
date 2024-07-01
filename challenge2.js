//function that takes in the speed of a car and prints an output
var prompt=require('prompt')
prompt.start()
prompt.get('Speed',function(err,result){
    let speed1=result.Speed
    if(speed1>0 && speed1<=70){
        console.log('Ok')
    }
    
    else if(speed1>70){
        //declare variables to enable navigating through the nested if condition 
        excess=speed1-70
        points=(excess-excess%5)/5 //points are based on every extra 5 above 70 so any remainders after dividing by 5 are not of use
        //nest an if condition inside another so we introduce the conditions that fall under speed greater than 70
        if(points<=12){
            console.log(`Points:${points}`)
        }else{console.log('License suspended')}
        
    }else{
        console.log('Invalid speed')
    }
    
})


















