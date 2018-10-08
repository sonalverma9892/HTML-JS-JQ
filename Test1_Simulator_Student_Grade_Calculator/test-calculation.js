//var title = document.querySelector(".title");
//title.textContent = "Student Estimated Grade Winter2018";

//var students = document.querySelectorAll(".student");


// for (var i = 0; i < students.length; i++) {
//
//   var student = students[i];
//   var tdname = student.querySelector(".info-name");
//   var name   = tdname.textContent;
//   var tdId = student.querySelector(".info-id");
//   var id   = tdId.textContent;
//   var db = document.getElementById('db').value;
//   var swift = document.getElementById('swift').value;
//   var ios = document.getElementById('ios').value;
//   var java = document.getElementById('java').value;
//   var android = document.getElementById('android').value;
//   var html = document.getElementById('html').value;
//   var php = document.getElementById('php').value;
//   var cross = document.getElementById('cross').value;
//   var ios_adv = document.getElementById('ios_adv').value;
//   var android_adv = document.getElementById('android_adv').value;
//   var test = document.getElementById('test').value;
//   var bm = document.getElementById('bm').value;
//   var game = document.getElementById('game').value;
//   var capstone = document.getElementById('capstone').value;
//   var wearable = document.getElementById('wearables').value;
//   var tdgpa1 = student.querySelector(".info-gpa").value;
//   var tdgpa2 = student.querySelector(".info-gpa2").value;
//   var tdgpa3 = student.querySelector(".info-gpa3").value;
//   var cumgpa = student.querySelector(".info-cumu").value;
//
//   /* Logical Operators */
//   var nameValid = nameValidation(name);
//   var idValid = idValidation(id);
//   var gradeValid = gradesValidation(db) &&
//   gradesValidation(swift) && gradesValidation(ios) &&
//   gradesValidation(java) && gradesValidation(android) &&
//   gradesValidation(html) && gradesValidation(php) &&
//   gradesValidation(cross) && gradesValidation(ios_adv) &&
//   gradesValidation(android_adv) && gradesValidation(test) &&
//   gradesValidation(bm) && gradesValidation(game) &&
//   gradesValidation(capstone) && gradesValidation(wearable);
//
//   if (!nameValid) {
//     console.log("Invalid name!");
//     nameValid = false;
//     name.textContent = "Invalid name!";
//     /* Change the color via CSS */
//     student.classList.add("student-invalid");
//   }
//
//   if (!idValid){
//     console.log("Invalid Student ID!");
//     idValid = false;
//     id.textContent = "Invalid Student ID!";
//     /* Change the color via CSS */
//     student.classList.add("student-invalid");
//
//   }
//
//   if(!gradeValid){
//     console.log("Invalid Grades!");
//     gradeValid = false;
//     // tdgpa1.textContent = "Invalid Grades!";
//     // tdgpa2.textContent = "Invalid Grades!";
//     // tdgpa3.textContent = "Invalid Grades!";
//     student.classList.add("student-invalid");
//   }
//
//   /* Creating a function to encapsulate logics */
//   if (gradeValid){
//     var gpa_term1 = gpa1Calculation (db, swift, ios, java, android);
//     var gpa_term2 = gpa2Calculation (html, php, cross, ios_adv, android_adv);
//     var gpa_term3 = gpa3Calculation (test, bm, game, capstone, wearable);
//     var finalGPA = cumGpaCalculation (gpa1, gpa2, gpa3);
//     console.log(gpa_term1);
//     console.log(gpa_term2);
//     console.log(gpa_term3);
//     console.log(finalGPA);
//
//     if(gpa_term1 >= 94 && gpa_term1 <= 100){
//       console.log(gpa_term1);
//       parseString(gpa_term1) = "A+";
//       console.log(gpa_term1);
//     } else if (gpa_term1 >= 87 && gpa_term1 <= 94) {
//         gpa_term1 = "A";
//     } else if (gpa_term1 >= 80 && gpa_term1 < 87) {
//           gpa_term1 = "A-";
//     } else if (gpa_term1 >= 77 && gpa_term1 < 80) {
//           gpa_term1 = "B+";
//     } else if (gpa_term1 >= 73 && gpa_term1 < 77) {
//         gpa_term1 = "B";
//     } else if (gpa_term1 >= 70 && gpa_term1 < 73) {
//         gpa_term1 = "B-";
//     } else if (gpa_term1 >= 67 && gpa_term1 < 70) {
//         gpa_term1 = "C+";
//     } else if (gpa_term1 >= 63 && gpa_term1 < 67) {
//         gpa_term1 = "C";
//     } else if (gpa_term1 >= 60 && gpa_term1 < 63) {
//         gpa_term1 = "C-";
//     } else if (gpa_term1 >= 50 && gpa_term1 < 60) {
//         gpa_term1 = "D";
//     } else {
//         gpa_term1 = "F";
//     }
//
//     if(gpa_term2 >= 94 && gpa_term2 <= 100){
//       gpa_term2 = "A+";
//     } else if (gpa_term2 >= 87 && gpa_term2 <= 94) {
//         gpa_term2 = "A";
//     } else if (gpa_term2 >= 80 && gpa_term2 < 87) {
//           gpa_term2 = "A-";
//     } else if (gpa_term2 >= 77 && gpa_term2 < 80) {
//           gpa_term2 = "B+";
//     } else if (gpa_term2 >= 73 && gpa_term2 < 77) {
//         gpa_term2 = "B";
//     } else if (gpa_term2 >= 70 && gpa_term2 < 73) {
//         gpa_term2 = "B-";
//     } else if (gpa_term2 >= 67 && gpa_term2 < 70) {
//         gpa_term2 = "C+";
//     } else if (gpa_term2 >= 63 && gpa_term2 < 67) {
//         gpa_term2 = "C";
//     } else if (gpa_term2 >= 60 && gpa_term2 < 63) {
//         gpa_term2 = "C-";
//     } else if (gpa_term2 >= 50 && gpa_term2 < 60) {
//         gpa_term2 = "D";
//     } else {
//         gpa_term2 = "F";
//     }
//
//     if(gpa_term3 >= 94 && gpa_term3 <= 100){
//       gpa_term3 = "A+";
//     } else if (gpa_term3 >= 87 && gpa_term3 <= 94) {
//         gpa_term3 = "A";
//     } else if (gpa_term3 >= 80 && gpa_term3 < 87) {
//           gpa_term3 = "A-";
//     } else if (gpa_term3 >= 77 && gpa_term3 < 80) {
//           gpa_term3 = "B+";
//     } else if (gpa_term3 >= 73 && gpa_term3 < 77) {
//         gpa_term3 = "B";
//     } else if (gpa_term3 >= 70 && gpa_term3 < 73) {
//         gpa_term3 = "B-";
//     } else if (gpa_term3 >= 67 && gpa_term3 < 70) {
//         gpa_term3 = "C+";
//     } else if (gpa_term3 >= 63 && gpa_term3 < 67) {
//         gpa_term3 = "C";
//     } else if (gpa_term3 >= 60 && gpa_term3 < 63) {
//         gpa_term3 = "C-";
//     } else if (gpa_term3 >= 50 && gpa_term3 < 60) {
//         gpa_term3 = "D";
//     } else {
//         gpa_term3 = "F";
//     }
//
//     if(finalGPA >= 94 && finalGPA <= 100){
//       finalGPA = "A+";
//     } else if (finalGPA >= 87 && finalGPA <= 94) {
//         finalGPA = "A";
//     } else if (finalGPA >= 80 && finalGPA < 87) {
//           finalGPA = "A-";
//     } else if (finalGPA >= 77 && finalGPA < 80) {
//           finalGPA = "B+";
//     } else if (finalGPA >= 73 && finalGPA < 77) {
//         finalGPA = "B";
//     } else if (finalGPA >= 70 && finalGPA < 73) {
//         finalGPA = "B-";
//     } else if (finalGPA >= 67 && finalGPA < 70) {
//         finalGPA = "C+";
//     } else if (finalGPA >= 63 && finalGPA < 67) {
//         finalGPA = "C";
//     } else if (finalGPA >= 60 && finalGPA < 63) {
//         finalGPA = "C-";
//     } else if (finalGPA >= 50 && finalGPA < 60) {
//         finalGPA = "D";
//     } else {
//         finalGPA = "F";
//     }
//
//     tdgpa1.textContent = gpa_term1;
//     tdgpa2.textContent = gpa_term2;
//     tdgpa3.textContent = gpa_term3;
//     cumgpa.textContent = finalGPA;
//
//   }
//
// }

/* Function bmiCalculation Definition */

function gpa1Calculation (db, swift, ios, java, android) {
  var gpa1 = 0;

  var total = (parseFloat(db)+parseFloat(swift)+parseFloat(ios)+parseFloat(java)+parseFloat(android));
  console.log(total);
  gpa1 = parseInt(total / 5);
  console.log(gpa1);

  if(gpa1 >= 94 && gpa1 <= 100){
    //console.log(gpa1);
    //parseString(gpa1) = "A+";
    gpa1 = "A+";
  } else if (gpa1 >= 87 && gpa1 <= 94) {
      gpa1 = "A";
  } else if (gpa1 >= 80 && gpa1 < 87) {
        gpa1 = "A-";
  } else if (gpa1 >= 77 && gpa1 < 80) {
        gpa1 = "B+";
  } else if (gpa1 >= 73 && gpa1 < 77) {
      gpa1 = "B";
  } else if (gpa1 >= 70 && gpa1 < 73) {
      gpa1 = "B-";
  } else if (gpa1 >= 67 && gpa1 < 70) {
      gpa1 = "C+";
  } else if (gpa1 >= 63 && gpa1 < 67) {
      gpa1 = "C";
  } else if (gpa1 >= 60 && gpa1 < 63) {
      gpa1 = "C-";
  } else if (gpa1 >= 50 && gpa1 < 60) {
      gpa1 = "D";
  } else {
      gpa1 = "F";
  }
  return gpa1;
}

function gpa2Calculation (html, php, cross, ios_adv, android_adv) {
  var gpa2 = 0;

  var total = (parseFloat(html)+parseFloat(php)+parseFloat(cross)+parseFloat(ios_adv)+parseFloat(android_adv));
  console.log(total);
  gpa2 = (total / 5);
  console.log(gpa2);

  if(gpa2 >= 94 && gpa2 <= 100){
    //console.log(gpa2);
    //parseString(gpa2) = "A+";
    gpa2 = "A+";
  } else if (gpa2 >= 87 && gpa2 <= 94) {
      gpa2 = "A";
  } else if (gpa2 >= 80 && gpa2 < 87) {
        gpa2 = "A-";
  } else if (gpa2 >= 77 && gpa2 < 80) {
        gpa2 = "B+";
  } else if (gpa2 >= 73 && gpa2 < 77) {
      gpa2 = "B";
  } else if (gpa2 >= 70 && gpa2 < 73) {
      gpa2 = "B-";
  } else if (gpa2 >= 67 && gpa2 < 70) {
      gpa2 = "C+";
  } else if (gpa2 >= 63 && gpa2 < 67) {
      gpa2 = "C";
  } else if (gpa2 >= 60 && gpa2 < 63) {
      gpa2 = "C-";
  } else if (gpa2 >= 50 && gpa2 < 60) {
      gpa2 = "D";
  } else {
      gpa2 = "F";
  }

  return gpa2;
}

function gpa3Calculation (test, bm, game, capstone, wearable) {
  var gpa3 = 0;

  var total = (parseFloat(test)+parseFloat(bm)+parseFloat(game)+parseFloat(capstone)+parseFloat(wearable));
  console.log(total);
  gpa3 = (total / 5);
  console.log(gpa3);

  if(gpa3 >= 94 && gpa3 <= 100){
    //console.log(gpa3);
    //parseString(gpa3) = "A+";
    gpa3 = "A+";
  } else if (gpa3 >= 87 && gpa3 <= 94) {
      gpa3 = "A";
  } else if (gpa3 >= 80 && gpa3 < 87) {
        gpa3 = "A-";
  } else if (gpa3 >= 77 && gpa3 < 80) {
        gpa3 = "B+";
  } else if (gpa3 >= 73 && gpa3 < 77) {
      gpa3 = "B";
  } else if (gpa3 >= 70 && gpa3 < 73) {
      gpa3 = "B-";
  } else if (gpa3 >= 67 && gpa3 < 70) {
      gpa3 = "C+";
  } else if (gpa3 >= 63 && gpa3 < 67) {
      gpa3 = "C";
  } else if (gpa3 >= 60 && gpa3 < 63) {
      gpa3 = "C-";
  } else if (gpa3 >= 50 && gpa3 < 60) {
      gpa3 = "D";
  } else {
      gpa3 = "F";
  }
  return gpa3;
}

function gpa1Integer (db, swift, ios, java, android) {
  var gpa1 = 0;

  var total = (parseFloat(db)+parseFloat(swift)+parseFloat(ios)+parseFloat(java)+parseFloat(android));
  console.log(total);
  gpa1 = parseInt(total / 5);
  console.log(gpa1);
  return gpa1;
}

function gpa2Integer (html, php, cross, ios_adv, android_adv) {
  var gpa2 = 0;

  var total = (parseFloat(html)+parseFloat(php)+parseFloat(cross)+parseFloat(ios_adv)+parseFloat(android_adv));
  console.log(total);
  gpa2 = (total / 5);
  console.log(gpa2);
  return gpa2;
}

function gpa3Integer (test, bm, game, capstone, wearable) {
  var gpa3 = 0;

  var total = (parseFloat(test)+parseFloat(bm)+parseFloat(game)+parseFloat(capstone)+parseFloat(wearable));
  console.log(total);
  gpa3 = (total / 5);
  console.log(gpa3);
  return gpa3;
}


function cumGpaCalculation (gpa1, gpa2, gpa3) {
  var finalGPA = 0;
  finalGPA = parseInt((parseInt(gpa1)+parseInt(gpa2)+parseInt(gpa3))/3);
  console.log("Value final:" + finalGPA);

  if(finalGPA >= 94 && finalGPA <= 100){
    //console.log(finalGPA);
    //parseString(finalGPA) = "A+";
    finalGPA = "A+";
  } else if (finalGPA >= 87 && finalGPA <= 94) {
      finalGPA = "A";
  } else if (finalGPA >= 80 && finalGPA < 87) {
        finalGPA = "A-";
  } else if (finalGPA >= 77 && finalGPA < 80) {
        finalGPA = "B+";
  } else if (finalGPA >= 73 && finalGPA < 77) {
      finalGPA = "B";
  } else if (finalGPA >= 70 && finalGPA < 73) {
      finalGPA = "B-";
  } else if (finalGPA >= 67 && finalGPA < 70) {
      finalGPA = "C+";
  } else if (finalGPA >= 63 && finalGPA < 67) {
      finalGPA = "C";
  } else if (finalGPA >= 60 && finalGPA < 63) {
      finalGPA = "C-";
  } else if (finalGPA >= 50 && finalGPA < 60) {
      finalGPA = "D";
  } else {
      finalGPA = "F";
  }
  console.log(finalGPA);
  return finalGPA;
}

function findIfCoopReady(cumGPA){
  var coop = "";
  if (cumGPA == "A+") {
    coop = "Allowed";
  } else if (cumGPA == "A") {
    coop = "Allowed";
  } else if (cumGPA == "A-") {
    coop = "Allowed";
  } else if (cumGPA == "B+") {
    coop = "Allowed";
  } else if (cumGPA == "B") {
    coop = "Allowed";
  } else {
    coop = "Not Allowed";
  }
  return coop;
}

/* Adding a function data validation */
function nameValidation(name) {
  var alphaExp = /^[a-zA-Z ]{2,30}$/;
  if(name.match(alphaExp)){
  return true;
  }else{
  return false;
  }

}

/* Adding a function data validation */
function idValidation(id) {
  var exp = /^[C][0-9]{7}$/;
  if (id.match(exp)) {
    return true;
  } else {
    return false;
  }
}

function gradesValidation(value){
  var exp = /^(100(.0{0,2}?)?$|([1-9]{0,1})([0-9]{1})((.[0-9]{0,2})|(\,[0-9]{0,2}))?)$/;
  if(value.match(exp)){
    return true;
  } else{
    return false;
  }
}
