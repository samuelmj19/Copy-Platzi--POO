const natalia ={
    name: 'natalia',
    age: 22,
    approvedCourses:[
        'Basic HTML',
        'Basic CSS'
    ],
    approveCurses(newCourse){
        this.approvedCourses.push(newCourse)
    }
}


function student(name, age, approvedCourses){
    this.name = name;
    this.age = age;
    this.approvedCourses = approvedCourses;
} 

student.prototype.approveCurses = function(newCourse){
    this.approvedCourses.push(newCourse)
}

const juana = new student(
    "juana",
    23,
    [
        'Python',
        'Ruby'
    ]
)

// class

class student2{
    constructor({
        name,
        age,
        approvedCourses = [],
        email
    }){
        this.name = name;
        this.age = age;
        this.approvedCourses = approvedCourses;
        this.email = email;
    }

    approveCurses(...newCourse){
        this.approvedCourses.push(newCourse)
    }
}


const jose = new student2({
    name:'jose',
    email:'jose@gamil.com',
    age: 23,
})

Object.defineProperty(natalia, "navigator", {
    value: 'Chrome',
    enumerable: false,
    writable: false,
    configurable: false
})