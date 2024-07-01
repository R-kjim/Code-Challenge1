//function that calculates net salary given two inputs: basic salary and benefits
//we are expected to return payee,NHIF&NSSF deductions,gross&net salary
//for easeof handling this data together, we create an object that will have these items as keys
const prompt=require('prompt')
prompt.start()
prompt.get(['Salary','benefits'],function(err,result){
    let benefits2=result.benefits
    let basic=result.Salary
    console.log(`Gross Salary: ${basic+benefits2/12}`)
    let paye=0;
    if(basic>0 && basic<=24000){
        paye=basic*0.1
        console.log(`PAYE: ${basic*0.1}`)
    }else if(basic>24000 && basic<=32333){
        paye=.25*(basic-24000)
        console.log(`Paye: ${0.25*(basic-24000)}`)
    }else if(basic>32333 && basic<=500000){
        paye=0.3*(basic-32333)
       console.log(`Paye: ${0.3*(basic-32333)}`)
    }else if(basic>500000 && basic<=800000){
        paye=0.325*(basic-500000)
       console.log(`Paye: ${0.325*(basic-500000)}`)
    }else{
        paye=0.35*(basic-500000)
        console.log(`Paye: ${0.35*(basic-500000)}`)
    }
    //calculatethe fringe benefit tax.
    //assume the employer provides loans to employees at a rate of 12%(has to be lower than market rates)
    //the employer will pay a benefit tax to a tune of 30% on the remainder to the market rate 
    //the employee will also be deducted the benefits on a monthly basis
    let benefitsTax=(0.3*(0.15-0.12)*benefits2)/12   //defines the monthly tax payable for benefits given that benefits are provided for an annual figure
    let benefitsPayment=((1.12*benefits2)/12)+benefitsTax  //defines the monthly deductions to cover for benefits enjoyed
    console.log(`Benefits Deductions: ${benefitsPayment}`)
    //add a nhif key to our console.log object and it should show the value of amount paid as NHIF based on salary
    //write an if condition that gives the amount to be paid for nhif based on salary
    let nhif1=0;
    if(basic<6000){
        nhif1=150
        console.log(`NHIF: ${150}`)
    }else if(basic>=6000 && basic<8000){
        nhif1=300
        console.log(`NHIF: ${300}`)
    }else if(basic>=8000 && basic<12000){
        nhif1=400
        console.log(`NHIF: ${400}`)
    }else if(basic>=12000 && basic<15000){
        nhif1=500
        console.log(`NHIF: ${500}`)
    }else if (basic>=15000 && basic<20000){
        nhif1=600
        console.log(`NHIF: ${600}`)
    }else if(basic>=20000 && basic<25000){
        nhif1=750
        console.log(`NHIF: ${750}`)
    }else if(basic>=25000 && basic<30000){
        nhif1=850
        console.log(`NHIF: ${850}`)
    }else if(basic>=30000 && basic<35000){
        nhif1=900
        console.log(`NHIF: ${900}`)
    }else if(basic>=35000 && basic<40000){
        nhif1=950
        console.log(`NHIF: ${950}`)
    }else if(basic>=40000 && basic<45000){
        nhif1=1000
        console.log(`NHIF: ${1000}`)
    }else if(basic>=45000 && basic<50000){
        nhif1=1100
        console.log(`NHIF: ${1100}`)
    }else if(basic>=50000 && basic<60000){
        nhif1=1200
        console.log(`NHIF: ${1200}`)
    }else if(basic>=60000 && basic<70000){
        nhif1=1300
        console.log(`NHIF: ${1300}`)
    }else if(basic>=70000 && basic<80000){
        nhif1=1400
        console.log(`NHIF: ${1400}`)
    }else if(basic>=80000 && basic<90000){
        nhif1=1500
        console.log(`NHIF: ${1500}`)
    }else if(basic>=90000 && basic<100000){
        nhif1=1600
        console.log(`NHIF: ${1600}`)
    }else{
        nhif=1700
        console.log(`NHIF: ${1700}`)
    }
     //add an nssf key that assigns value of deductible amount for nssf
        let nssf1=0;
        if(basic<=7000){
            nssf1=0.06*basic
            console.log(`NSSF: ${0.06*basic}`)
         } else if(basic>7000 && basic<=36000){
            nssf1=((basic-7000)*0.06)+(0.06*7000)
            console.log(`NSSF: ${((basic-7000)*0.06)+(0.06*7000)}`)
         }else if(basic>36000){
            nssf1=0.06*36000
            console.log(`NSSF: ${0.06*36000}`)//the upper limit for nssf deductions is 36000--incomeabove that is not taxed any extra amount
         }
    console.log(`Net Salary: ${basic+benefits2/12-paye-benefitsPayment-nhif1 -nssf1}`)
})