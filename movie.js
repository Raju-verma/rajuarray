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
let output =arr.filter(val=>val>2005);
console.log(output);