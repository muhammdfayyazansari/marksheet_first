
var studentName = prompt("Enter Your Name");
var rollNumber = +prompt("Enter Your roll number")
var mathNumber = parseInt(prompt("Enter Your Math Marks less than 100"));
if (mathNumber > 100 && mathNumber < 0) {
    alert("Your number should less 100 or greater than and equal to 0")
}
var physicsNumber = parseInt(prompt("Enter Your Physics Marks less than 100"));
if (mathNumber > 100 && physicsNumber > 100 && physicsNumber < 0) {
    alert("Your number should less 100 or greater than and equal to 0")
}
var chemistryNumber = parseInt(prompt("Enter Your chemistry Marks less than 100"));
if (mathNumber > 100 && physicsNumber > 100 && chemistryNumber > 100 && chemistryNumber < 0) {
    alert("Your number should less 100 or greater than and equal to 0")
}
var islamiatNumber = parseInt(prompt("Enter Your Islamniat Marks less than 100"));
if (mathNumber > 100 && physicsNumber > 100 && chemistryNumber > 100 && islamiatNumber > 100 && islamiatNumber < 0) {
    alert("Your number should less 100 or greater than and equal to 0")
}
var urduNumber = parseInt(prompt("Enter your urdu Marks less than 100"));
if (mathNumber > 100 && physicsNumber > 100 && chemistryNumber > 100 && islamiatNumber > 100 && urduNumber > 100 && urduNumber < 0) {
    alert("Your number should less 100 or greater than and equal to 0 and greater than 0")
}
var obtainedMarks = mathNumber + physicsNumber + chemistryNumber + islamiatNumber + urduNumber;
var totalMarks = 500;
var percentage = (obtainedMarks / totalMarks) * 100;
var s = 1;
var grade = "";
var output;
if (mathNumber > 100 && physicsNumber > 100 && chemistryNumber > 100 && islamiatNumber > 100 && urduNumber > 100 && mathNumber < 0 && physicsNumber < 0 && chemistryNumber < 0 && islamiatNumber < 0 && urduNumber < 0) {
    alert("Your number should less 100")
}
else if (percentage >= 80 && percentage <= 100) {
    grade = "A-ONE";
}
else if (percentage >= 70 && percentage <= 80) {
    grade = "A"
}
else if (percentage >= 60 && percentage <= 70) {
    grade = "B"
}
else if (percentage >= 50 && percentage <= 60) {
    grade = "C"
}
else { grade = "Fail" }
if (mathNumber < 100 && physicsNumber < 100 && chemistryNumber < 100 && islamiatNumber < 100 && urduNumber < 100 && mathNumber > 0 && physicsNumber > 0 && chemistryNumber > 0 && islamiatNumber > 0 && urduNumber > 0) {
    output = document.write("<table border='1' align='center'>"
        + "<th colspan='10' id='heading'>" + "<h1 aligh='center'>" + "MARK SHEET" + "</h1>" + "</th>"

        + "<tr id='firstrow'>" + "<td>" + "<h6 align='center'>" + "BATCH & ROLL NO" + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + "STUDENT NAME " + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + "MATH" + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + "PHHYSICS" + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + "CHEMISTRY" + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + "ISLAMIAT" + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + "URDU" + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + "OBTAINED MARKS" + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + "PERCENTAGE" + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + "GRADE" + "</h6>" + "</td>"
        + "</tr>"
        + "<tr id='secondRow'>" + "<td>" + "<h6 align='center'>" + "EX MS-15-" + rollNumber + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + studentName + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + mathNumber + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + physicsNumber + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + chemistryNumber + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + islamiatNumber + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + urduNumber + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + obtainedMarks + "</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + percentage + "%</h6>" + "</td>"
        + "<td>" + "<h6 align='center'>" + grade + "</h6>" + "</td>"
        + "</tr>"
        //    +"<tr>"+"<td>"+"<h6 align='center'>"+ s++ +"</h6>"+"</td>"   +"<td>"+"<h6>"+"ROLL NO "+"</h6>"+"</td> "   +"<td>"+"<h6 align='center'> "+ rollNumber +"</h6>"+"</td>" +"</tr>"
        //    +"<tr>"+"<td>"+"<h6 align='center'>"+ s++ +"</h6>"+"</td>"   +"<td>"+"<h6>"+"MATH "+"</h6>"+"</td> "   +"<td>"+"<h6 align='center'> "+ mathNumber +"</h6>"+"</td>" +"</tr>"
        //    +"<tr>"+"<td>"+"<h6 align='center'>"+ s++ +"</h6>"+"</td>"   +"<td>"+"<h6>"+"PHYSICS "+"</h6>"+"</td> "   +"<td>"+"<h6 align='center'> "+ physicsNumber +"</h6>"+"</td>" +"</tr>"
        //    +"<tr>"+"<td>"+"<h6 align='center'>"+ s++ +"</h6>"+"</td>"   +"<td>"+"<h6>"+"CHEMISTRY "+"</h6>"+"</td> "   +"<td>"+"<h6 align='center'> "+ chemistryNumber +"</h6>"+"</td>" +"</tr>"
        //    +"<tr>"+"<td>"+"<h6 align='center'>"+ s++ +"</h6>"+"</td>"   +"<td>"+"<h6>"+"ISLAMIAT "+"</h6>"+"</td> "   +"<td>"+"<h6 align='center'> "+ islamiatNumber +"</h6>"+"</td>" +"</tr>"
        //    +"<tr>"+"<td>"+"<h6 align='center'>"+ s++ +"</h6>"+"</td>"   +"<td>"+"<h6>"+"URDU "+"</h6>"+"</td> "   +"<td>"+"<h6 align='center'> "+ urduNumber +"</h6>"+"</td>" +"</tr>"
        //    +"<tr>"+"<td>"+"<h6 align='center'>"+ s++ +"</h6>"+"</td>"   +"<td>"+"<h6>"+"PERCENTAGE "+"</h6>"+"</td> "   +"<td>"+"<h6 align='center'> "+ percentage +"%</h6>"+"</td>" +"</tr>"
        //    +"<tr>"+"<td>"+"<h6 align='center'>"+ s++ +"</h6>"+"</td>"   +"<td>"+"<h6>"+"GRADE "+"</h6>"+"</td> "   +"<td>"+"<h6 align='center'> "+ grade +"</h6>"+"</td>" +"</tr>"
        + "</table>");
    // output = document.write("<table width='400px' border='1' cellspacing='0px' cellpadding='5px'>"
    //    +"<tr>"+"<td>"+"<h5>"+"S No "+"</h5>"+"</td>"   +"<td>"+"<h5>"+"STUDENT NAME "+"</h5>"+"</td>"   +"<td>"+"<h5 align='center'>"+ studentName +"</h5>"+"</td>" +"</tr>"
    //    +"<tr>"+"<td>"+"<h5 align='center'>"+ s++ +"</h5>"+"</td>"   +"<td>"+"<h5>"+"ROLL NO "+"</h5>"+"</td> "   +"<td>"+"<h5 align='center'> "+ rollNumber +"</h5>"+"</td>" +"</tr>"
    //    +"<tr>"+"<td>"+"<h5 align='center'>"+ s++ +"</h5>"+"</td>"   +"<td>"+"<h5>"+"MATH "+"</h5>"+"</td> "   +"<td>"+"<h5 align='center'> "+ mathNumber +"</h5>"+"</td>" +"</tr>"
    //    +"<tr>"+"<td>"+"<h5 align='center'>"+ s++ +"</h5>"+"</td>"   +"<td>"+"<h5>"+"PHYSICS "+"</h5>"+"</td> "   +"<td>"+"<h5 align='center'> "+ physicsNumber +"</h5>"+"</td>" +"</tr>"
    //    +"<tr>"+"<td>"+"<h5 align='center'>"+ s++ +"</h5>"+"</td>"   +"<td>"+"<h5>"+"CHEMISTRY "+"</h5>"+"</td> "   +"<td>"+"<h5 align='center'> "+ chemistryNumber +"</h5>"+"</td>" +"</tr>"
    //    +"<tr>"+"<td>"+"<h5 align='center'>"+ s++ +"</h5>"+"</td>"   +"<td>"+"<h5>"+"ISLAMIAT "+"</h5>"+"</td> "   +"<td>"+"<h5 align='center'> "+ islamiatNumber +"</h5>"+"</td>" +"</tr>"
    //    +"<tr>"+"<td>"+"<h5 align='center'>"+ s++ +"</h5>"+"</td>"   +"<td>"+"<h5>"+"URDU "+"</h5>"+"</td> "   +"<td>"+"<h5 align='center'> "+ urduNumber +"</h5>"+"</td>" +"</tr>"
    //    +"<tr>"+"<td>"+"<h5 align='center'>"+ s++ +"</h5>"+"</td>"   +"<td>"+"<h5>"+"PERCENTAGE "+"</h5>"+"</td> "   +"<td>"+"<h5 align='center'> "+ percentage +"%</h5>"+"</td>" +"</tr>"
    //    +"<tr>"+"<td>"+"<h5 align='center'>"+ s++ +"</h5>"+"</td>"   +"<td>"+"<h5>"+"GRADE "+"</h5>"+"</td> "   +"<td>"+"<h5 align='center'> "+ grade +"</h5>"+"</td>" +"</tr>"
    //    +"</table>");
}
else {
    alert("Re-Enter Your data. \nNote: Every subject marks should greater than 0 and less than 100.");
    window.location.reload(true);
}