//function that grades student marks
//marks have to be between 0-100
var prompt=require('prompt')
prompt.start()
prompt.get('marks',function(err,result){
    let marks1=result.marks
    if(marks1>79 && marks1<=100){
        console.log('Grade: A')
    }else if(marks1>=60 &&marks1<=79){
        console.log('Grade: B')
    }else if(marks1>=50 && marks1<=59){
        console.log('Grade: C')
    }else if(marks1>=40 && marks1<=49){
        console.log ('Grade: D')
    }else if(marks1>=0 && marks1<40){
        console.log ('Grade: E')
    }else{
        console.log('INVALID MARKS')      //output if the entered marks are out of range-not 0-100  
    }
})
