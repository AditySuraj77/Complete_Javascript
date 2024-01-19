function setusername(username) {
     this.username = username
     
}


function defineuser(username,email,pass) {
     setusername.call(this,username)// this code call another variables of functions
     this.email = email
     this.pass = pass
     
}

const user = new defineuser('Admin','Admin@google.com',123)
console.log(user);