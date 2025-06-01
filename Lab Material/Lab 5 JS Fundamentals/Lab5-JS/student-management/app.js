import promptSync from 'prompt-sync';
const prompt = promptSync();

let Student = [];
function getStudents(){
    for(let i=1; i<6;i++){
        let name = prompt(`Enter a Name: `);
        let gender = prompt(`Enter the Gender of student: `);
        let age = Math.floor(Math.random()*(35-17+1)+17);
        let grade = Math.floor(Math.random()*(101));
        let student = {
            Name:name,
            Gender:gender,
            Age:age,
            Grade:grade,
        };
        Student.push(student);
    }
    return Student;
}
console.log("Student List: ", getStudents());

function youngest(){
    const youngestStudent = Student.reduce((stu, Curr) => stu.Age<Curr.Age ? stu:Curr);
    return youngestStudent;
}
console.log("Youngest Student: ", youngest());

function oldest(){
    const oldestStudent = Student.reduce((acc,curr)=>acc.Age>curr.Age?acc:curr);
    return oldestStudent;
}
console.log("Oldest Student: ", oldest());

function averageage(){
    const sumAge = Student.reduce((acc,curr)=>acc+curr.Age,0);
    const averageAge = sumAge/Student.length;
    return averageAge;
}
console.log("Average Age: ",averageage());

function medianage(){
    const SortedStudents = Student.sort((a,b)=>a.Age-b.Age);
    console.log(SortedStudents);
    if(Student.length %2 == 0){
        const HalfIndex = Student.length/2;
        const median = (SortedStudents[HalfIndex].Age+SortedStudents[HalfIndex-1].Age)/2;
        return median;
    }else{
        const HalfIndex = Math.floor(Student.length/2);
        console.log(Student.length/2);
        const median = SortedStudents[HalfIndex].Age;
        return median;
    }
}
console.log("Median Age",medianage());

function MeanGrades(){
    return Student.reduce((acc,curr)=>acc+curr.Grade,0)/Student.length;
}
console.log("Mean Grade: ",MeanGrades());

function VarianceGrade(){
    const meanGrades = MeanGrades();
    const Variance = (Student.map((studentobj)=>(studentobj.Grade-meanGrades)**2).reduce((acc,curr)=>acc+curr,0))/(Student.length-1);
    return Variance;
}
console.log("Variance Grade: ",VarianceGrade());

function ReturnGender(gender){
    return Student.filter((val) => val.Gender===gender);
}
console.log("Student by Gender: ",ReturnGender("Male"));

function AlphabeticalSort(){
    return Student.sort((a,b)=>a.Name.localeCompare(b.Name))
}
console.log("Alphabetical Sort: ",AlphabeticalSort());

function SortDescendGrade(){
    return Student.sort((a,b)=>b.Grade-a.Grade);
}
console.log("Descending Grades: ",SortDescendGrade());

function FailChecker(){
    return Student.filter((student)=>student.Grade<60);
}
console.log("Students Below 60%: ",FailChecker());

function HighestGradeStudents(){
    const MaxGrade = Student.reduce((acc,curr)=>acc<curr.Grade?curr.Grade:acc,0)
    return Student.filter((student)=> student.Grade===MaxGrade);
}
console.log("Highest Grade Student/s: ",HighestGradeStudents());

function HighestGradeStudentsFemale(){
    const FemaleStudents = Student.filter((student)=>student.Gender==='Female');
    const MaxGrade = FemaleStudents.reduce((acc,curr)=>acc<curr.Grade?curr.Grade:acc,0);
    return FemaleStudents.filter((students)=>students.Grade===MaxGrade);
}
console.log("Highest Female Student/s: ",HighestGradeStudentsFemale())

function AverageGradeMale(){
    const MaleStudents = Student.filter((student)=>student.Gender==='Male');
    const MaleStudentsLength = MaleStudents.length;
    const SumGrades = MaleStudents.reduce((acc,curr)=>acc+curr.Grade,0);
    return SumGrades/MaleStudentsLength;
}
console.log("Average Grade for Males: ",AverageGradeMale());

function Evaluation(){
    Student.map((student)=>student.Grade<60? student.Overall="Pass":student.Overall="Fail");
    return Student;
}
console.log(Evaluation());