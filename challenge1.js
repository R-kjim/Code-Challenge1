//function that grades student marks
//marks have to be between 0-100
function gradingCriteria(marks){
    if(marks>79 && marks<=100){
        return 'Grade: A'
    }else if(marks>=60 &&marks<=79){
        return 'Grade: B'
    }else if(marks>=50 && marks<=59){
        return 'Grade: C'
    }else if(marks>=40 && marks<=49){
        return 'Grade: D'
    }else if(marks<40 && marks>=0){
        return 'Grade: E'
    }else{
        return 'INVALID MARKS'      //output if the entered marks are out of range-not 0-100  
    }
}
