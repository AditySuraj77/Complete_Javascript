// More on Object


let obj = {}

obj.id = '12AS'
obj.name = 'Felix'
obj.profession = 'SkyDiver'

//console.log(obj);


// multidimensional object

let multidimensional_obj = {
     f_dim :'Objects',
     another_dim:{
          f_dim:'Obj1',
          s_dim:'Obj2',
          t_dim:'Obj3',
          depth_obj:{
               f:'1',
               s:'2',
               t:'3'
          }
     }

}

//console.log(multidimensional_obj.another_dim.depth_obj.f);


// assign two objects or more

let obj_1 = {a:'1',b:'2'}
let obj_2 = {c:'3',d:'4'}
let obj_3 = {e:'5',f:'6'}

let OBJ = Object.assign({},obj_1,obj_2,obj_3) // 1st Method

const OBJS = {...obj_1,...obj_2,...obj_3} // 2nd Method
//console.log(OBJ);



/// Another Method 

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));