var buttonAdd = document.querySelector("#add-student");

buttonAdd.addEventListener("click", function(event)  {

  event.preventDefault();
  var form   = document.querySelector("#form-add");
  var student = formDataStudent(form)
  var errors = studentValidation(student)
  if (errors.length > 0) {
    showErrorMessages(errors);
    return;
  }

  /* Add NEW FUNCTION */
  addtoTable(student);
  form.reset();
  /* Add to error handling */
  var erroMessages = document.querySelector("#erro-messages");
  erroMessages.innerHTML = "";

});

function formDataStudent (form) {
  var student = {
    name: form.name.value,
    id: form.id.value,
    db: form.db.value,
    swift: form.swift.value,
    ios: form.ios.value,
    java: form.java.value,
    android: form.android.value,
    html: form.html.value,
    php: form.php.value,
    cross: form.cross.value,
    ios_adv: form.ios_adv.value,
    android_adv: form.android_adv.value,
    test: form.test.value,
    bm: form.bm.value,
    game: form.game.value,
    capstone: form.capstone.value,
    wearable: form.wearables.value,
    gpa1: gpa1Calculation(form.db.value, form.swift.value, form.ios.value, form.java.value, form.android.value),
    gpa2: gpa2Calculation(form.html.value, form.php.value, form.cross.value, form.ios_adv.value, form.android_adv.value),
    gpa3: gpa3Calculation(form.test.value, form.bm.value, form.game.value, form.capstone.value, form.wearables.value),
    cumGPA: cumGpaCalculation( gpa1Integer(form.db.value, form.swift.value, form.ios.value, form.java.value, form.android.value),
      gpa2Integer(form.html.value, form.php.value, form.cross.value, form.ios_adv.value, form.android_adv.value),
       gpa3Integer(form.test.value, form.bm.value, form.game.value, form.capstone.value, form.wearables.value)),
    coopReady: findIfCoopReady(cumGpaCalculation( gpa1Integer(form.db.value, form.swift.value, form.ios.value, form.java.value, form.android.value),
      gpa2Integer(form.html.value, form.php.value, form.cross.value, form.ios_adv.value, form.android_adv.value),
       gpa3Integer(form.test.value, form.bm.value, form.game.value, form.capstone.value, form.wearables.value)))
     }

    return student
}

function buildTr(student) {
    var studentTr = document.createElement("tr");

    studentTr.classList.add("student");

    studentTr.appendChild(buildTd(student.name,"info-name"));
    studentTr.appendChild(buildTd(student.id,"info-id"));
    studentTr.appendChild(buildTd(student.db,"info-db"));
    studentTr.appendChild(buildTd(student.swift,"info-swift"));
    studentTr.appendChild(buildTd(student.ios,"info-ios"));
    studentTr.appendChild(buildTd(student.java,"info-java"));
    studentTr.appendChild(buildTd(student.android,"info-android"));
    studentTr.appendChild(buildTd(student.gpa1,"info-gpa1"));
    studentTr.appendChild(buildTd(student.html,"info-html"));
    studentTr.appendChild(buildTd(student.php,"info-php"));
    studentTr.appendChild(buildTd(student.cross,"info-cross"));
    studentTr.appendChild(buildTd(student.ios_adv,"info-iosadv"));
    studentTr.appendChild(buildTd(student.android_adv,"info-androidadv"));
    studentTr.appendChild(buildTd(student.gpa2,"info-gpa2"));
    studentTr.appendChild(buildTd(student.test,"info-test"));
    studentTr.appendChild(buildTd(student.bm,"info-buss"));
    studentTr.appendChild(buildTd(student.game,"info-game"));
    studentTr.appendChild(buildTd(student.capstone,"info-capstone"));
    studentTr.appendChild(buildTd(student.wearable,"info-wearable"));
    studentTr.appendChild(buildTd(student.gpa3,"info-gpa3"));
    studentTr.appendChild(buildTd(student.cumGPA,"info-cumu"));
    return studentTr;
}

function buildTd(data,classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = data;
    return td;
}

function addtoTable(student) {
  var studentTr = buildTr(student);
  var table = document.querySelector("#table-students");
  console.log(studentTr);
  table.appendChild(studentTr);

  var coop = document.querySelector('#message');
  coop.innerHTML = "";
  var span = document.createElement("span");
  span.textContent = student.coopReady;
  coop.appendChild(span);
  //coop.value = student.coopReady;
}

function studentValidation (student) {

    var errors = [];
    if (!nameValidation(student.name)) errors.push("The Student name entered is invalid");
    if (!idValidation(student.id)) errors.push("The Student ID is invalid");
    if (!gradesValidation(student.db)) errors.push("Invalid Grades");
    if (student.name.length == 0) {
      errors.push("The student must have a name");}
    if (student.id.length == 0) {
      errors.push("The student must have an ID");}
    if (student.db.length == 0) {
      errors.push("Grades cannot be Empty");}
    return errors
}

function showErrorMessages(errors) {
    var ul = document.querySelector("#erro-messages");
    ul.innerHTML = ""
    errors.forEach(function(erro){
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });
}
