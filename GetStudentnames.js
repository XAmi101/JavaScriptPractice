//Create a function that takes an array of students and returns an array of student names.

function getStudentNames(students) {
   let nameArr = students.map(a => a.name);
   return nameArr;
}
  
