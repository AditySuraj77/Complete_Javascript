//   For loop



for (let i = 0; i < 10; i++) {
     //console.log(i);
     
}


for (let i = 1; i <= 10; i++) {
     //console.log(i);
     for (let j = 1; j <= 10; j++) {
          //console.log(i + "*" + j + '=' +i*j);
          
     }
     
}


let myarr = ['Indigo','Lufthansa','Emirtes']

for (let i = 0; i < myarr.length; i++) {
     const element = myarr[i];
     //console.log(element);
}











//    break statement

for (let i = 0; i <=10; i++) {
     if (i == 5) {
          //console.log('break the loop');
          break
     }
     //console.log(i);
     
}












//    Continue statement

for (let i = 0; i <=10; i++) {
     if (i == 3) {
          console.log('Continue the loop');
          continue
     }
     else if(i == 8){
          console.log('Loop break');
          break
     }
     console.log(i);
     
}








