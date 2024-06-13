

class school {
    name :string;
    students: student[]=[];
    teachers: Teacher[]=[];


    addstudent(stdobj: student){
        this.students.push(stdobj)
    } 
    addteacher(teobj: Teacher){
        this.teachers.push(teobj)
    }
    constructor(name:string){
        this.name = name;
    }

}


class student{
    name:string;
    age:number;
    schoolName:string;
    constructor (name:string,age:number,schoolName:string){
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}


class Teacher extends student{}


// school
let school1 = new school("Educator");
let school2 = new school("Millat");
let school3 = new school("sarfraz")

// students
let s1 = new student("Fatima",16,school1.name)
let s2 = new student("Muskan",15,school2.name)
let s3 = new student("Mehreen",14,school3.name)


// Teacher
let t1 = new Teacher("Hifza",23,school1.name)
let t2 = new Teacher("Ayesha",22,school1.name)
let t3 = new Teacher("Khadija",24,school1.name)


// student
school1.addstudent(s1);
school2.addstudent(s2);
school3.addstudent(s3);
 


// Teacher
school1.addteacher(t1);
school2.addteacher(t2);
school3.addteacher(t3);


// Teacher
console.log(t1);
console.log(t2);
console.log(t3);


// school
console.log(school1);
console.log(school2);
console.log(school3);



// Ek constructor ek class ka ek special method hota hai jo class ke naam se define hota hai aur constructor keyword ka istemal hota hai


