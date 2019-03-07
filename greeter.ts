//Add this class to your 'greeter' code
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

// Add this interface
interface Person {
    firstName: string;
    lastName: string;
}

//Update this function to use the interface and new variable which is now a 'Person' object


function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

//Now change our 'user' so it becomes an object of our 'Student' class
let user = new Student("Jane", "M. ", "User");

//Update our user variable to have firstName and lastName data
//let user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);