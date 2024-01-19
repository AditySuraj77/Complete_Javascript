// Filter

let num = [1,2,3,4,5,6,7,8,9,10]

const numvalues = num.filter((e)=> e >= 5)
//console.log(numvalues);



const books = [
     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
   ];

let val = books.filter((bk)=> bk.genre === 'Non-Fiction')
//console.log(val);

let newval=  books.filter((bk)=> bk.publish >= 2000 && bk.edition >= 2000)
//console.log(newval);











// Map

let newNum = [1,2,3,4,5,6,7,8,9,10]

const addnum = newNum.map((e)=> e + 1)
//console.log(addnum);








// Chaining of Higher order functions
const multinum = newNum.map((e)=> e + 1).filter((n)=> n %2 == 0).map((i)=> `${i} is Even Number`)
//console.log(multinum);





// Reduces


let mynum = [1,2,3,4,5,6,7,8,9,10]

const myTotal = mynum.reduce(function (acc, currval) {
     //console.log(`acc: ${acc} and currval: ${currval}`);
     return acc + currval
}, 0)

//console.log(myTotal);






const shoppingCart = [
     {
         itemName: "js course",
         price: 2999
     },
     {
         itemName: "py course",
         price: 999
     },
     {
         itemName: "mobile dev course",
         price: 5999
     },
     {
         itemName: "data science course",
         price: 12999
     },
 ]

 let sh = shoppingCart.reduce((acc,item)=> acc + item.price,0)
 //console.log(sh);
