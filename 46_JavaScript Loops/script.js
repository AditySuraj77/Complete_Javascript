console.log("JavaScript Loops")


// for loop

let i = 0
// for (let i = 0; i < 11; i++) {
//      console.log(i, 'x')

// }

let t = 1
// printing table of 2
for (; t < 11;) {
     console.log(2 * t)
     t += 1


}

// for in loop


let meal = {
     breafast: "One Fruit and 15 spoon phoha",
     launch: "Fruit Salad and whol grain also green vegetables",
     dinner: "Take light dinner or One glass milk"
}
for (const key in meal) {

     const element = meal[key];
     console.log(element)


}

const car = ['audi', 'tataharriar', 'nexon']
let cars = ''
for (x of car) {
     cars += x

}

// console.log(cars)


let language = 'Javascript'

let lang = ''

for (l of language) {
     lang += l
     console.log(l)

}


// While loop


let b = 0
while ( b < 11) {
     console.log(2 * b)
     b++

}

