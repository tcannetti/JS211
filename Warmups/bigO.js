//0(1)
function lecture(students){
  console.log("Here is my lecture, listen to my words of wisdom");
}

//0(log n)

//0(n)
function grade(students){
  for(let i = 0; i< students.length; i++){
    console.log('Grading the paper for student #1', i);
  }
}

// 0(n log n)


//0(n^2)
function deepGrade(students){
  for(let i = 0; i < students.length; i++){
    for(let j = 0; j < students.length; j++){
      let left = students[i];
      let right = students[j];
      console.log("Compairing ", left , " and ", right);
    }
  }
}

let s = ['Matt', 'Robert', 'Taylor'];

deepGrade(s);



