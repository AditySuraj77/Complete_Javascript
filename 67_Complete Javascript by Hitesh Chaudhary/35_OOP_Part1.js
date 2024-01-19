// *******************Objects Literals*****************************
const User = {
     username:'Admin',
     logincount : 4,
     signin: true,
     details: function() {
          console.log(`Username:${this.username}`);  
          //console.log(this); 
     }

}

//console.log(User.details());



function CurrentUser(Username,loggedin,email) {
     this.u_name = Username
     this.u_logedin = loggedin
     this.u_email = email

     console.log(this);
}

// using [ new ] keyword for creatingnew instance of objects 
const userone = new CurrentUser('Aditya',false,null)
const usertwo = new CurrentUser('Sam',true,null)
console.log(userone);
console.log(usertwo);
