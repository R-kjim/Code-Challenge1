//function that calculates net salary given two inputs: basic salary and benefits
//we are expected to return payee,NHIF&NSSF deductions,gross&net salary
//for easeof handling this data together, we create an object that will have these items as keys
const salarySummary={}
function netSalary1(basic,benefits){ //base our function that basic refers to basic salary and is monthly while benefits are annual
    salarySummary.grossSalary=basic
    if(basic<=24000){
        salarySummary.paye=basic*0.1
    }else if(basic>24000 && basic<=32333){
        salarySummary.paye=0.25*basic
    }else if(basic>32333 && basic<=500000){
        salarySummary.paye=0.3*basic
    }else if(basic>500000 && basic<=800000){
        salarySummary.paye=0.325*basic
    }else{
        salarySummary.paye=0.35*basic
    }
    //calculatethe fringe benefit tax.
    //assume the employer provides loans to employees at a rate of 12%(has to be lower than market rates)
    //the employer will pay a benefit tax to a tune of 30% on the remainder to the market rate 
    //the employee will also be deducted the benefits on a monthly basis
    let benefitsTax=(0.3*(0.15-0.12)*benefits)/12   //defines the monthly tax payable for benefits given that benefits are provided for an annual figure
    let benefitsPayment=((1.12*benefits)/12)+benefitsTax  //defines the monthly deductions to cover for benefits enjoyed
    salarySummary.benefitsDeductions=benefitsPayment
    //add a nhif key to our salarySummary object and it should show the value of amount paid as NHIF based on salary
    //write an if condition that gives the amount to be paid for nhif based on salary
    if(basic<6000){
        salarySummary.nhif=150
    }else if(basic>=6000 && basic<8000){
        salarySummary.nhif=300
    }else if(basic>=8000 && basic<12000){
        salarySummary.nhif=400
    }else if(basic>=12000 && basic<15000){
        salarySummary.nhif=500
    }else if (basic>=15000 && basic<20000){
        salarySummary.nhif=600
    }else if(basic>=20000 && basic<25000){
        salarySummary.nhif=750
    }else if(basic>=25000 && basic<30000){
        salarySummary.nhif=850
    }else if(basic>=30000 && basic<35000){
        salarySummary.nhif=900
    }else if(basic>=35000 && basic<40000){
        salarySummary.nhif=950
    }else if(basic>=40000 && basic<45000){
        salarySummary.nhif=1000
    }else if(basic>=45000 && basic<50000){
        salarySummary.nhif=1100
    }else if(basic>=50000 && basic<60000){
        salarySummary.nhif=1200
    }else if(basic>=60000 && basic<70000){
        salarySummary.nhif=1300
    }else if(basic>=70000 && basic<80000){
        salarySummary.nhif=1400
    }else if(basic>=80000 && basic<90000){
        salarySummary.nhif=1500
    }else if(basic>=90000 && basic<100000){
        salarySummary.nhif=1600
    }else{
        salarySummary.nhif=1700
    }
     //add an nssf key that assigns value of deductible amount for nssf
        if(basic<=7000){
            salarySummary.nssf=0.06*basic
         } else if(basic>7000 && basic<=36000){
            salarySummary.nssf=((basic-7000)*0.06)+(0.06*7000)
         }else if(basic>36000){
            salarySummary.nssf=0.06*36000//the upper limit for nssf deductions is 36000--incomeabove that is not taxed any extra amount
         }
    //add a net salary key that calculates the net amount an individual receives based on the above definitions and calculations
    salarySummary.netSalary=salarySummary.grossSalary-salarySummary.paye-salarySummary.benefitsDeductions-salarySummary.nhif-salarySummary.nssf
    return salarySummary
        }
