console.log('JavaScript Strings');


// String

let f_name = 'Name'
let s_name = "Name"

console.log(f_name)
console.log(s_name)

// length property
console.log(f_name.length);


// Template Literals

let country_name = 'Australia, India, NewZeland, England, SouthAfrica, Pakistan, Netherland, Srilanka'
console.log(`This all country teams qualify to ODI WC Cricket in 2023 ${country_name}`);

let f_team = 'India'
let s_team = 'Austrlia'

console.log(`This two team are play final together in 2023 ODI WC = ${f_team} VS ${s_team}`);


// Escape Sequence Character

console.log("don\"t");
// Newline charcater \n
console.log("India tour of South Africa, 2023-24. Dec 10, Sun. South Africa vs India. 1st T20I at Kingsmead, Durban. \nMatch starts at Dec 10, 16:00 GMT. Dec 12, Tue ...");

// String Property and method

let myname = "Napeolean"

console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.slice(3,5));
console.log(myname.slice(2));

console.log(myname.replace('eolean', 'Polo'));

console.log(myname.concat(' Begger'));

let text = "       Hello World!        ";
let result = text.trim();

console.log(result);


// Print charcters one by one

console.log(myname[0]);
console.log(myname[1]);
console.log(myname[2]);
console.log(myname[3]);
console.log(myname[4]);
console.log(myname[5]);
console.log(myname[6]);
console.log(myname[7]);
console.log(myname[8]);