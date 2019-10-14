// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

    class Instructor extends Person {
        constructor(childAttributes) {
            super(childAttributes);
            this.specialty = childAttributes.specialty;
            this.favLanguage = childAttributes.favLanguage;
            this.catchPhrase = childAttributes.catchPhrase
        }
        demo(subject) {
            console.log(`Today we are learning about ${subject}`);
        }
        grade(student, subject) {
            console.log(`${student.name} receives a perfect score on ${subject}`);
        }
    }

    class Student {
        constructor(childAttributes) {
            super(childAttributes);
            this.previousBackground = childAttributes.previousBackground;
            this.className = childAttributes.className;
            this.favSubjects = childAttributes.favSubjects;
        }
        listSubjects() {
            this.favSubjects.forEach((subject) => {
                console.log(subject);
            } )
        }

        PRAssignment(subject) {
            console.log(`${student.name} has submitted a PR for ${subject}`);
        }

        sprintChallenge(subject) {
            console.log(`${student.name} has begun sprint challenge on ${subject}`);
        }
    }

