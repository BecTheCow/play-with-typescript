//Add this class to your 'greeter' code
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
//Update this function to use the interface and new variable which is now a 'Person' object
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
//Now change our 'user' so it becomes an object of our 'Student' class
var user = new Student("Jane", "M. ", "User");
//Update our user variable to have firstName and lastName data
//let user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
