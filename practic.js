// _________ * Create comments *_________ 
class Comments{
    constructor({
        commentsContent,
        studentRoll = 'Student',
        name,
    }){
      this.commentsContent = commentsContent;  
      this.studentRoll = studentRoll;  
      this.name = name;  
      this.like = 0;
    }
    publicComment(){
        console.log(`${this.name} (${this.studentRoll})`)
        console.log(this.like)
        console.log(this.commentsContent)
    }
}


// _________ * Create Courses *_________ 

class Courses{
    constructor({
        name,
        classes =[],
        teacher,
        freeCourse = false,
        language = 'spanish',
    }){
        this._name =name;
        this.classes = classes;
        this.teacher =teacher;
        this.freeCourse = freeCourse;
        this.language = language;
    }
    get name(){
        return this._name
    }
    set name(newName){
        if(newName === "el pepe"){
            console.error('you can not')
        }else{
            this._name = newName;
        }
    }
}

const courseBasicProgramming = new Courses({
    name: 'Basic Programming Courses',
    teacher: 'Freddy',
    freeCourse: true
})
const definitiveHTMLCourse = new Courses({
    name: 'Definitive HTML and CSS Course',
    teacher: 'Diego DeGranda'
})
const CSSGridCourse = new Courses({
    name: 'CSS Grid Course',
    teacher: 'Estephany Aguilar'
})
const POOCourseJSCourse = new Courses({
    name: 'POO in JavaScript Course',
    teacher: 'Juan DC'
})
const unrealEngineCourse = new Courses({
    name: 'Unreal Engine Course',
    language: "english"
})
const pythonBasicCourse = new Courses({
    name: 'Python Basic Course',
})
const pronunciationEnglishCourse = new Courses({
    name: 'Pronunciation English Course',
    language: 'english'
})
const readingEnglishCourse = new Courses({
    name: 'Reading English Course',
    language: 'english'
})
const speakingEnglishCourse = new Courses({
    name: 'Speaking English Course',
    language: 'english'
})




// _________ * Create Schools *_________ 

class LearningPath{
    constructor({name, courses = []}){
        this.name = name;
        this.courses = courses
    }
    addSchool(...newCourses){
        this.courses.push(newCourses)
    }
}

const WebDevelopment = new LearningPath({
    name: 'Web Development School',
    courses:[
        courseBasicProgramming,
        definitiveHTMLCourse,
        CSSGridCourse,
        POOCourseJSCourse,
    ]
})
const DataScience = new LearningPath({
    name:'Data Science School',
    courses:[
        pythonBasicCourse,
        courseBasicProgramming,
    ]
})
const VideoGamesSCH = new LearningPath({
    name: 'Video Games School',
    courses:[
        courseBasicProgramming,
        unrealEngineCourse,
    ]
})
const EnglishAcademySCH = new LearningPath({
    name: 'English Academy',
    courses:[
        pronunciationEnglishCourse,
        readingEnglishCourse,
        speakingEnglishCourse,
    ]
})


// _________ * Create Students *_________ 



class Student{
    constructor({
        name,
        age,
        email,
        twitter = undefined,
        facebook = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPath = []
    }){
        this.name = name;
        this.age = age;
        this.email = email;
        this.socialMedia =  {
            twitter,
            facebook,
            instagram
        }
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }
    addComment(content){
        const studentComment= new Comments({
            commentsContent: content,
            name: this.name,
        })
        studentComment.publicComment()
    }
    
}

class FreeStudent extends Student{
    constructor(props){
        super(props)
    }
    approveCourses(newCourses){
        if(newCourses.language !== 'spanish') {
            console.error('Sorry ' + this.name +'! You can´t complete this course, try to get a Expert Plan to have access to English Academy.')
        }else if(newCourses.freeCourse == false){
            console.error('Sorry ' + this.name+'! You can´t complete this course, try to get a Basic or Expert Plan to continue.') 
        }else{
            this.approvedCourses.push(newCourses)
        }
    }
    addLearningPath(newLearningPath){
        this.learningPath.push(newLearningPath)
    }
}
class BasicStudent extends Student{
    constructor(props){
        super(props)
    }
    approveCourses(newCourses){
        if(newCourses.language === 'spanish'){
            this.approvedCourses.push(newCourses)
        }else{
            console.error('Sorry ' + this.name +'! You can´t complete this course, try to get a Expert Plan to have access to English Academy.')
        }
    }
    addLearningPath(newLearningPath){
        this.learningPath.push(newLearningPath)
    }
}
class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }
    approveCourses(newCourses){
        this.approvedCourses.push(newCourses)
    }
    addLearningPath(newLearningPath){
        this.learningPath.push(newLearningPath)
    }
}
class TeacherStudent extends Student{
    constructor(props){
        super(props)
    }
    approveCourses(newCourses){
        this.approvedCourses.push(newCourses)
    }
    addLearningPath(newLearningPath){
        this.learningPath.push(newLearningPath)
    }
    addComment(content){
        const studentComment= new Comments({
            commentsContent: content,
            name: this.name,
            studentRoll: 'Teacher'
        })
        studentComment.publicComment()
    }
}


const samuel = new ExpertStudent({
    name: 'Samuel Morales',
    age: 22,
    email: 'samuel@gamil.com',
    twitter: '@samuelmj19',
    instagram: '@samuelmj19',
    facebook: 'samuel morales',
    approvedCourses: [
        'CSS',
        'HTML'
    ],
    learningPath: [WebDevelopment, DataScience, VideoGamesSCH] 
})
const rafael = new BasicStudent({
    name: 'Rafael Mena',
    age: 20,
    email: 'rafael@gamil.com',
    instagram: '@rafael84',
    facebook: 'Rafael A. Mena',
    learningPath: [WebDevelopment,] 
})
const jeancy = new TeacherStudent({
    name: 'Jeancy S. Herrera Ramirez',
    age: 23,
    email: 'jeancy@gamil.com',
    instagram: '@jeancy35',
    facebook: 'El Patol',
    learningPath: [WebDevelopment,] 
})
