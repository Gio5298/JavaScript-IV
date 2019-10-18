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
    }//logs greeting^^
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
    }//logs phrase about daily subject^^

    grade(subject = ['HTML', 'CSS', 'Javascript']){
        return `${studentOne.name} receives a perfect score on ${subject[2]}`
    }//logs score response^^
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
//[x] sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
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
    }//logs all subjects 1by1^^

    PRAssignment(subject = ['HTML', 'CSS', 'Javascript']){
        return `${this.name} has submitted a PR for ${subject[0]}`
    };//logs that the student has submitted a PR^^

    sprintChallenge(subject = ['HTML Sprint', 'CSS Sprint', 'Javascript Sprint']){
        return `${this.name} has begun sprint challenge ${subject[2]}`
    }//logs that student has begun sprint challenge^^
}

/*
// Project Manager
//- Now that we have instructors and students, we'd be nowhere without our PM's
//[x] ProjectManagers are extensions of Instructors
//- ProjectManagers have the following unique props:
//[x] gradClassName: i.e. CS1
//[x] favInstructor: i.e. Sean
//- ProjectManagers have the following Methods:
//[x] standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​`
//[] debugsCode a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/

class ProjectManager extends Instructor{
    constructor(proManAttrs){
        super(proManAttrs);
        this.gradClassName = proManAttrs.gradClassName,
        this.favInstructor = proManAttrs.favInstructor
    };
    standUp(channel = ['Web_25']){
        return `${this.name} anounces to ${channel}, @channel standy times!`
    }
    debugsCode(subject = ['HTML', 'CSS', 'Javascript']){
        return `${this.name} debugs ${studentThree.name}'s code on ${subject[1]}`
    }
}

const instructOne = new Instructor({
    name: 'Tyler',
    age: '30',
    location: 'Columbus, OH',
    specialty: 'Python',
    favLanguage: 'CSS',
    catchPhrase: 'I care not that it is your date of birth'
})

const instructTwo = new Instructor({
    name: 'Josh',
    age: '31',
    location: 'Columbus, OH',
    specialty: 'Redux',
    favLanguage: 'Javascript',
    catchPhrase: 'Growing grass motivates me.'
})

const studentOne = new Student({
    name: 'Ryan',
    age: '22',
    location: 'Phoenix, AZ',
    previousBackground: 'museum guide',
    className: 'Web21',
    favSubjects: ['Python', 'Redux', 'CSS']
})

const studentTwo = new Student({
    name: 'Gio',
    age: '21',
    location: 'Rio Rico, AZ',
    previousBackground: 'booking agent',
    className: 'Web21',
    favSubjects: ['CSS', 'Redux', 'Javascript']
})

const studentThree = new Student({
    name: 'Gaby',
    age: '21',
    location: 'Phoenix, AZ',
    previousBackground: 'astronaut',
    className: 'Web21',
    favSubjects: ['HTML', 'CSS', 'Javascript']
})

const proManOne = new ProjectManager({
    name: 'Jenna',
    age: '27',
    location: 'Columbus, OH',
    specialty: 'javascript',
    favLanguage: 'CSS',
    catchPhrase: 'Shout out to pears',
    gradClassName: 'Web25',
    favInstructor: 'Tyler',
    channel: 'Web_25'
})

const proManTwo = new ProjectManager({
    name: 'Debby',
    age: '26',
    location: 'Huntsville, AL',
    specialty: 'javascript',
    favLanguage: 'CSS',
    catchPhrase: 'Life is a wild ride',
    gradClassName: 'Web25',
    favInstructor: 'Josh',
})

console.log(instructOne.demo());
console.log(instructTwo.grade());
console.log(studentOne.listsSubjects());
console.log(studentTwo.PRAssignment());
console.log(studentThree.sprintChallenge());
console.log(proManOne.standUp());
console.log(proManTwo.debugsCode());