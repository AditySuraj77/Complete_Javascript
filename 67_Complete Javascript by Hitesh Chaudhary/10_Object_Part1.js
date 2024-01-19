//   Objects 

// creating objects

// let obj1 = Object.create()


let obj2 = {
     name:'Lufthanasa',
     Origin:'Munich',
     type:'Airline'
}


// Accessing ojects

//console.log(obj2.name);
//console.log(obj2['name']);


// objects.freeze this syntax use to lock the objects means we don't change value


// Here creating key and values in existsing objects
obj2.headquarter = 'Germany'
obj2.founded = '6 Jan December'
//console.log(obj2['headquarter']);
//console.log(obj2['founded']);




// Define array in objects

obj2.hub = ['Brussels', 'Frankfurt', 'Munich', 'Vienna', 'Zurich']
//console.log(obj2.hub);



// Define functions in objects

const fn1 = function () {
     return console.log('Hello i am 1st functions exists in Objects');
     
}

obj2.fun1 = fn1
//console.log(obj2.fun1());


const fn2 = function () {
     return console.log(`Hello i am 2nd functions exists in Objects and I know flight of ${this.name}`);
     
}
obj2.fun2 = fn2
//console.log(obj2.fun2());


console.log(obj2);
