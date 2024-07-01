//sorting an array of numbers
//we do so by imposing a function inside the sort command
//the function will act as a basis of sorting the array
function sorting(x,y){
    return x-y
} //this function returns a  value that could be positive,negative or zero
//we will impose this function when sorting our array of numbers
let input=[5,6,1,3,4,2]
input.sort(sorting) //this will sort the input array in an ascending order
//the order of values and the return value in the function determines whether we will have an ascending or descending order
//if the output of the function is negative, x is placed before y and if its positive is positive, y is placed before x


//staircase problem
//create a function that takes in an integer and prints staircases of the integer levels
function steps(x){
    let y='' //create an empty variable to use in our loop
    //nest a for loop and set the conditions to begin at 1 and end at x-the value taken by our function and iterate in steps of 1
    for(i=1;i<=x;i++){
        console.log(y+='#')//print every value assigned to y as the loop proceeds
    }
}


//a function that takes in the radius and height of a cylinder, calculates its volume and returns the volume, radius and height as keys of an object
const cylinder={}
function vol(r,h){
    let volume1=Math.PI*r**2*h
    cylinder.radius=r,
    cylinder.height=h,
    cylinder.volume=volume1.toFixed(4)//rounds off the value of volume1 to 4 decimal places
    return(cylinder)
}

console.log(vol(2,20))

