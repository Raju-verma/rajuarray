let arr =[
              {fname:"raju",lname:"verma",age:27},
              {fname:"ravi",lname:"barde",age:28},
              {fname:"chitrank",lname:"dixit",age:25},
              {fname:"arpit",lname:"shukla",age:29}, 
] ;
//  let output =arr.map(val=>val.age); 

//   let output1=arr.filter(val=>val.age>26).map(val1=>val1.fname+""+val1.lname);
//   console.log(output1);

 // console.log(output);
 let output=arr.filter(val=>val.age<27).map(val=>val.fname+" - "+val.lname+"- "+val.age);
 console.log(output);
