// //function that calculates net salary given two inputs: basic salary and benefits
// //we are expected to return payee,NHIF&NSSF deductions,gross&net salary
// //for easeof handling this data together, we create an object that will have these items as keys
// const salarySummary={}
// function netSalary1(basic,benefits){
//     if(basic<=24000){
//         salarySummary.paye=basic*0.1
//     }else if(basic>24000 && basic<=32333){
//         salarySummary.paye=0.25*basic
//     }else if(basic>32333 && basic<=500000){
//         salarySummary.paye=0.3*basic
//     }else if(basic>500000 && basic<=800000){
//         salarySummary.paye=0.325*basic
//     }else{
//         salarySummary.paye=0.35*basic
//     }
//     if(basic<6000){
//         salarySummary.nhif=150
//     }else if(basic>=6000 && basic<8000){
//         salarySummary.nhif=300
//     }elseif(basic>=8000 && basic<12000){
//         salarySummary.nhif=400
//     }else if(basic>=12000 && basic<15000){
//         salarySummary.nhif=
//     }
//     return salarySummary
// }
// console.log(netSalary1(25000,100))