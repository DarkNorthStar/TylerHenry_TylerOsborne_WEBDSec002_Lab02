
class User {
    constructor(firstName,lastName,username,email,password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    get getFirstName(){
        return this.firstName;
    }
    get getLastName(){
        return this.lastName;
    }
    get getUsername(){
        return this.username;
    }
    get getEmail(){
        return this.email;
    }
    get getPassword(){
        return this.password;
    }
    set setFirstName(firstName){
        this.firstName = firstName;
    }
    set setLastName(lastName){
        this.lastName = lastName;
    }
    set setUsername(username){
        this.username = username;
    }
    set setEmail(email){
        this.email = email;
    }
    set setPassword(password){
        this.password = password;
    }

  }