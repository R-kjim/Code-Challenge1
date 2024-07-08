//function that calculates net salary given two inputs: basic salary and benefits
//we are expected to return payee,NHIF&NSSF deductions,gross&net salary
//for ease of handling this data together, we create an object that will have these items as keys
const prompt=require('prompt-sync')()

function salaryCalculator(){
    let basicSalary=parseInt(prompt('Enter your basic salary: '))//prompts user to enter their basic salary
    let benefits=parseInt(prompt('Enter your benefits: '))//prompts user to enter their benefits and converts the input to an integer
    let netCalculations={}//creates an empty object where our calculations will be stored
    if(basicSalary>0 && basicSalary<=24000){
        let paye2=netCalculations.PAYE=basic*0.1
    }else if(basicSalary>24000 && basicSalary<=32333){
        let paye3=netCalculations.PAYE=0.25*(basicSalary-24000)+paye2
    }else if(basicSalary>32333 && basicSalary<=500000){
        let paye4=netCalculations.PAYE=0.3*(basicSalary-32333)
    }else if(basicSalary>500000 && basicSalary<=800000){
        paye5=netCalculations.PAYE=0.325*(basicSalary-500000)+paye4
    }else{
        paye6=netCalculations.PAYE=0.35*(basicSalary-500000)+paye5
    }
    //calculate the fringe benefit tax.
    //assume the employer provides loans to employees at a rate of 12%(has to be lower than market rates)
    //the employer will pay a benefit tax to a tune of 30% on the remainder to the market rate 
    //the employee will also be deducted the benefits on a monthly basis
    let benefitsTax=(0.3*(0.15-0.12)*benefits)/12   //defines the monthly tax payable for benefits given that benefits are provided for an annual figure
    let benefitsPayment=((1.12*benefits)/12)+benefitsTax  //defines the monthly deductions to cover for benefits enjoyed
    netCalculations.Benefits= Math.floor(benefitsPayment)
   
    //add a nhif key to our console.log object and it should show the value of amount paid as NHIF based on salary
    //write an if condition that gives the amount to be paid for nhif based on salary
    if(basicSalary<6000){
        netCalculations.NHIF=150
    }else if(basicSalary>=6000 && basicSalary<8000){
        netCalculations.NHIF=300
    }else if(basicSalary>=8000 && basicSalary<12000){
        netCalculations.NHIF=400
    }else if(basicSalary>=12000 && basicSalary<15000){
        netCalculations.NHIF=500
    }else if (basicSalary>=15000 && basicSalary<20000){
        netCalculations.NHIF=600
    }else if(basicSalary>=20000 && basicSalary<25000){
        netCalculations.NHIF=750
    }else if(basicSalary>=25000 && basicSalary<30000){
        netCalculations.NHIF=850
    }else if(basicSalary>=30000 && basicSalary<35000){
        netCalculations.NHIF=900
    }else if(basicSalary>=35000 && basicSalary<40000){
        netCalculations.NHIF=950
    }else if(basicSalary>=40000 && basicSalary<45000){
        netCalculations.NHIF=1000
    }else if(basicSalary>=45000 && basicSalary<50000){
        netCalculations.NHIF=1100
    }else if(basicSalary>=50000 && basicSalary<60000){
        netCalculations.NHIF=1200
    }else if(basicSalary>=60000 && basicSalary<70000){
        netCalculations.NHIF=1300
    }else if(basicSalary>=70000 && basicSalary<80000){
        netCalculations.NHIF=1400
    }else if(basicSalary>=80000 && basicSalary<90000){
        netCalculations.NHIF=1500
    }else if(basicSalary>=90000 && basicSalary<100000){
        netCalculations.NHIF=1600
    }else{
        netCalculations.NHIF=1700
    }
     //add an nssf key that assigns value of deductible amount for nssf
        if(basicSalary<=7000){
            netCalculations.NSSF=0.06*basicSalary
         } else if(basicSalary>7000 && basicSalary<=36000){
            let nssf2=netCalculations.NSSF=((basicSalary-7000)*0.06)+(0.06*7000)
         }else if(basicSalary>36000){
            netCalculations.NSSF=0.06*36000
         }
         
    console.log(netCalculations)
}
salaryCalculator()