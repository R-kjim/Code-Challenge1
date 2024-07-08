//function that returns an output based on the speed input after prompting a user to enter the speed

let prompt=require('prompt-sync')()

function speedTest(){
    let speed=parseInt(prompt('Enter car speed: '))
    if (speed>0 && speed<=70){
        console.log('Your speed is OK!')
    }else if(speed>70){
        let excess=speed-70;
        let points=(excess-excess%5)/5;
        if(points>12){
            console.log('Your license has been suspended!!')
        }else{
            console.log(`You have ${points} points`)
        }
    }
}
speedTest()