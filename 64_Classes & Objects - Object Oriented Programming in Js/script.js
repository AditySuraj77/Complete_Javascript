// this is prototype its use to inherit others property to another objects
/*
let animal = {
     eats:true
}

let rabbit = {jump:true}


rabbit.__proto__ = animal;
*/
















// class & Objects

/*
class Phone {
     constructor(name, price) {
          this.name = name
          this.price = price
     }

     dispay() {
          return console.log(this.name,this.price);

     }
}

let obj = new Phone('VIVO', 14500)
console.log(obj);
*/
















// inherit method

/*

class Phone{
     constructor(ram,rom,cam){
          this.ram = ram
          this.rom = rom
          this.cam = cam
     }

     display_parent(){
          return console.log(this.ram,this.rom,this.cam);
     }
}

// here use extend keyword to inherit children class to parent class method only
// Ahead we look super()keyword to call parent class constructor

class SmartPhone extends Phone{

     display_children(){
          return console.log('Inside Children class');
     }
}

let obj2 = new SmartPhone('8GB','128GB','64MP')
console.log(obj2);
console.log(obj2.display_children());
console.log(obj2.display_parent());
*/











// inherit constructor
/*
class Phone{
     constructor(ram,rom,cam){
          this.ram = ram
          this.rom = rom
          this.cam = cam
     }

     display_parent(){
          return console.log(this.ram,this.rom,this.cam);
     }

     show(){
          console.log('Parent Show');
     }
}


class SmartPhone extends Phone{
     constructor(ram,rom,cam,name,price){
          super(ram,rom,cam)
          this.name = name
          this.price = price
          /// here we inherit parent class constructor using super()keyword

     }

     display_children(){
          return console.log('Inside Children class');
     }

     show(){
          console.log('Children Show');
     }
}

let obj2 = new SmartPhone('8GB','128GB','64MP','VIVO',55000)
console.log(obj2);

*/




// Method overriding
/*
class Phone{
     constructor(ram,rom,cam){
          this.ram = ram
          this.rom = rom
          this.cam = cam
     }

     display_parent(){
          return console.log(this.ram,this.rom,this.cam);
     }

     show(){
          console.log('Parent Show');
     }
}


class SmartPhone extends Phone{
     constructor(ram,rom,cam,name,price){
          super(ram,rom,cam)
          this.name = name
          this.price = price
          /// here we inherit parent class constructor using super()keyword

     }

     display_children(){
          return console.log('Inside Children class');
     }

     show(){
          console.log('Children Show');
          super.show()
     }
          
}

let obj2 = new SmartPhone('8GB','128GB','64MP','VIVO',55000)
console.log(obj2);
// here we call show method there are 2 show method because of methodoveriding 
//children class show is excuted
// but we use super keyword to call parent class shows
console.log(obj2.show());
*/









// instance of operator
class Phone{
     constructor(ram,rom,cam){
          this.ram = ram
          this.rom = rom
          this.cam = cam
     }

     display_parent(){
          return console.log(this.ram,this.rom,this.cam);
     }

     show(){
          console.log('Parent Show');
     }
}


class SmartPhone extends Phone{
     constructor(ram,rom,cam,name,price){
          super(ram,rom,cam)
          this.name = name
          this.price = price
          /// here we inherit parent class constructor using super()keyword

     }

     display_children(){
          return console.log('Inside Children class');
     }

     show(){
          console.log('Children Show');
          super.show()
     }
          
}

let o = new SmartPhone('8GB','128GB','64MP','VIVO',55000)
console.log(o);
console.log(o instanceof Phone);
console.log(o instanceof SmartPhone);