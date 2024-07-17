// ...map method!...........<>>>>>>>>>>>>>>>>>>>>>>>>
    // let arr =[
    //          {fname:"raju",lname:"verma",age:27},
    //          {fname:"ravi",lname:"barde",age:28},
    //          {fname:"chitrank",lname:"dixit",age:25},
    //          {fname:"arpit",lname:"shukla",age:29},

    //         ];
            // let output =arr.map(val=>val.age);
            // let output = arr.map(val=>val.fname +" "+val.lname);
            // let output = arr.filter(val=>val.age>28)
            // console.log(output);


            
            // reduce method:>>>>>>>>>>>>>>>
        //   let array =[4,5,9,4,5,19]
        //   let output=array.reduce((total,num)=>{
        //   return total+num;
        //   },9);
        //   console.log(output);

//         let array =[4,5,9,15,17]
//         let output=array.reduce((total,val)=>{
//             if(val>15){
//                 val=val*10;
//         }    
//            return total+val;
//         },0);
//   console.log(output);
    //   filter
    
    // let arr =[
    //              {fname:"raju",lname:"verma",age:27},
    //              {fname:"chitrank",lname:"dixit",age:25},
    //              {fname:"ravi",lname:"barde",age:28},
    //               {fname:"arpit",lname:"shukla",age:29},

    // ];
    // // let output =arr.filter(val=>val.age>22);
    // // let output=arr.filter(val=>val.age>27).map(val=>val.fname+"-"+ val.lname);
    // // console.log(output);
    // let output = arr.filter(val=>{
    //     if(val.age>25){
    //         return val=" ";
    //     }

    // });
    // console.log(output);
    let arr = [
        {
            movie: 'tiger zinda hai',
            year: 2005,
            actor: ['salman khan', 'paresh rawal', 'kumud mishra'],
            director: 'aditya chopra'
        },
        {
            movie: 'vivah',
            year: 2008,
            actor: ['sahid kapoor', 'mohnish behal', 'alok nath' ],
            director: 'suraj badjatya'
        },
        {
            movie: 'jailor',
            year: 2023,
            actor: ['rajnikanth', 'shiva rajkumar', 'vinayakan' ],
            director: 'nelson dilip kumar'
        },
        {
            movie: 'animal',
            year: 2022,
            actor: ['ranbir kapoor', 'bobby devol', 'anil kapoor' ],
            director: 'aditya chopra'
        },
        {
            movie: 'pushpa',
            year: 2020,
            actor: ['allu arjun', 'fahad fasil', 'sunil',raju],
            director: 'sukumar'
        },
        {
            movie: 'badlapur',
            year: 2005,
            actor: ['varun dhawan', 'nawazudin', 'vijay'],
            director: 'aditya chopra'
        }
    ];
    let output = arr.map(val=>val.movie);
    console.log(output);
    