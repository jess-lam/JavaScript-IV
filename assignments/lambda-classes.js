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

    class Student extends Person{
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

    class ProjectManager extends Instructor {
        constructor(grandChildAttributes) {
            super(grandChildAttributes);
            this.gradClassName = grandChildAttributes.gradClassName;
            this.favInstructor = grandChildAttributes.favInstructor;
        }
        standUp(channel) {
            console.log(`${name} announces to ${channel} @channel stand up time!`)
        }

        debugsCode(student, subject) {
            console.log(`${name} debugs ${student.name}'s code on ${subject}`)
        }
    }

    const fred = new Instructor({
        name: 'Fred',
        location: 'Bedrock',
        age: 37,
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
      });

    
    const sam = new Student({
        name: 'Sam',
        location: 'San Jose',
        age: 21,
        previousBackground: 'Nursing',
        className: 'WEBPT8',
        favSubjects: `Computer Science`
      });

    const lisa = new ProjectManager({
        name: 'Lisa',
        location: 'Tahoe',
        age: 32,
        favLanguage: 'Python',
        specialty: 'Back-end',
        catchPhrase: `Life's good`,
        gradClassName: 'WEB5',
        favInstructor: 'Evan'
      });

      console.log(fred.demo());
      console.log(sam.listSubjects());
      console.log(lisa.standUp);

