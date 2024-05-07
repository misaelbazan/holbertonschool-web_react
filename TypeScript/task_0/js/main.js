var student1 = {
    firstName: "Misael Paco",
    lastName: "TODO",
    age: 22,
    location: "Lema",
};
var student2 = {
    firstName: "Amo A",
    lastName: "Cristo",
    age: 30,
    location: "Nada me falta",
};
var studentsList = [student1, student2];
function renderTable(studentsList) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var trHead = document.createElement('tr');
    var columns = ['First Name', 'Location'];
    columns.forEach(function (col) {
        var th = document.createElement('th');
        th.textContent = col;
        trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    studentsList.forEach(function (student) {
        var tr = document.createElement('tr');
        tr.appendChild(createCell(student.firstName));
        tr.appendChild(createCell(student.location));
        tbody.appendChild(tr);
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
}
function createCell(text) {
    var td = document.createElement('td');
    td.textContent = text;
    return td;
}
