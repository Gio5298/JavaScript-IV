// CODE here for your Lambda Classes

/* Person
//[] First we need a Person class. This will be our base-class
//[] Person receives name age location all as props
//[] Person receives speak as a method.
//[] This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props
*/
class Person{
    constructor(personAttrs){
        this.name = personAttrs.name,
        this.age = personAttrs.age,
        this.location = personAttrs.location;
    }//methods under here
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

/*
// Instructor
// Now that we have a Person as our base class, we'll build our Instructor class.
//[x] Instructor uses the same attributes that have been set up by Person
// Instructor has the following unique props:
//[x] specialty what the Instructor is good at i.e. 'redux'
//[x] favLanguage i.e. 'JavaScript, Python, Elm etc.'
//[x] catchPhrase i.e. Don't forget the homies
// Instructor has the following methods:
//[x] demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
//[x] grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
// */

class Instructor extends Person{
    constructor(instructAttrs){
      super(instructAttrs);
        this.specialty = instructAttrs.specialty,
        this.favLanguage = instructAttrs.favLanguage,
        this.catchPhrase = instructAttrs.catchPhrase
    }//methods under here
    demo(subject = ['HTML', 'CSS', 'Javascript']){
        return `Today we are learning about ${subject[2]}`
    }
    grade(subject = ['HTML', 'CSS', 'Javascript']){
        return `${this.name} receives a perfect score on ${subject[2]}`
    }
}

/*
// Student
// Now we need some students!
//[x] Student uses the same attributes that have been set up by Person
// Student has the following unique props:
//[x] previousBackground i.e. what the Student used to do before Lambda School
//[x] className i.e. CS132
//[x] favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
// Student has the following methods:
//[x/1-2] listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
//[x] PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
//[] sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
*/

class Student extends Person{
    constructor(studentAttrs){
      super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground,
        this.className = studentAttrs.className,
        this.favSubjects = studentAttrs.favSubjects
    }//methods under here
    listsSubjects(){
        this.favSubjects.forEach(subject => {
           return console.log(subject);
    });
    }//logs all subjects 1by1

    PRAssignment(subject = ['HTML', 'CSS', 'Javascript']){
        return `${this.name} has submitted a PR for ${subject[0]}`
    };//logs that the student has submitted a PR

    sprintChallenge(subject = ['HTML Sprint', 'CSS Sprint', 'Javascript Sprint']){
        return `${this.name} has begun sprint challenge ${subject[2]}`
    }
}

/*
// Project Manager
// Now that we have instructors and students, we'd be nowhere without our PM's
//[] ProjectManagers are extensions of Instructors
//[] ProjectManagers have the following unique props:
//[] gradClassName: i.e. CS1
//[] favInstructor: i.e. Sean
//[] ProjectManagers have the following Methods:
//[] standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
//[] debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
*/

const personOne = new Student({
    name: 'jen',
    age: '31',
    location: 'Ohio',
    specialty: 'javascript',
    favLanguage: 'CSS',
    catchPhrase: 'Shout out to pears',
    previousBackground: 'Welder',
    className: 'Web25',
    favSubjects: ['Redux', 'CSS', 'Python']
})

// console.log(personOne.demo());
// console.log(personOne.grade());
console.log(personOne.listsSubjects());
console.log(personOne.PRAssignment());
console.log(personOne.sprintChallenge());