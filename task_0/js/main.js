var student1 = {
    firstName: 'Suze',
    lastName: 'Q',
    age: 42,
    location: 'Yorba Linda, CA'
};
var student2 = {
    firstName: 'Buzz',
    lastName: 'Lightyear',
    age: 1427,
    location: 'Zurton'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var tableBod = table.createTBody();
studentsList.forEach(function (student) {
    var newRow = table.insertRow();
    var newFirst = newRow.insertCell();
    var newLoc = newRow.insertCell();
    newFirst.innerHTML = student.firstName;
    newLoc.innerHTML = student.location;
});
document.body.appendChild(table);
