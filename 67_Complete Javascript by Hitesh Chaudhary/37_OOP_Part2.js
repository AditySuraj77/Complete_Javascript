// Classes

// Modern Syntax

class User {
     constructor(username, email, password) {
          this.username = username
          this.email = email
          this.password = password
     }

     changepassword() {
          return `${this.password.slice(0, 1)}****${this.password.slice(-1)}`
     }

     changeusername() {
          return `${this.username.toUpperCase()}`
     }
}

const user1 = new User('Admin', 'Admin@yahoo.com', 'ABC123')

//console.log(user1.changepassword());
//console.log(user1.changeusername());






// ***********************Inheritance******************************************

class UserDetail {
     constructor(username, email) {
          this.username = username
          this.email = email
     }

     printusername() {
          return `Username:${this.username}`
     }
     printuseremail() {
          return `Email:${this.email}`
     }
}

class features extends UserDetail {
     constructor(username, email, language, intrest) {
          super(username, email)
          this.language = language
          this.intrest = intrest
     }
}

const U1 = new features('Admin', 'admin@yahoo.com', 'Python', 'Analytics')

//console.log(U1.printuseremail());
//console.log(U1.printusername());









/// *************************Static************************************
class Userabout {
     constructor(username, email) {
          this.username = username
          this.email = email
     }

     printusername() {
          return `Username:${this.username}`
     }
     static printuseremail() {
          return `Email:${this.email}`
     }
}

class featuresagain extends Userabout {
     constructor(username, email, language, intrest) {
          super(username, email)
          this.language = language
          this.intrest = intrest
     }
}

const U2 = new featuresagain('Admin', 'admin@yahoo.com', 'Python', 'Analytics')
console.log(U2.printuseremail());
