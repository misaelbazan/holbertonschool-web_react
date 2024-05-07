interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string,
}

const student1: Student = {
  firstName: "Misael Paco", 
  lastName: "TODO",
  age: 22,
  location: "Lema",
  };
const student2: Student = {
  firstName: "Amo A",
  lastName: "Cristo",
  age: 30,
  location: "Nada me falta",
  };
const studentsList = [student1, student2]

function renderTable(studentsList: Student[]): void {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const trHead = document.createElement('tr');

  const columns: string[] = ['First Name', 'Location'];

  columns.forEach((col) => {
    const th = document.createElement('th');
    th.textContent = col;
    trHead.appendChild(th);
  });

  thead.appendChild(trHead);

  studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    tr.appendChild(createCell(student.firstName));
    tr.appendChild(createCell(student.location));
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);

  document.body.appendChild(table);
}

function createCell(text: string): HTMLTableCellElement {
  const td = document.createElement('td');
  td.textContent = text;
  return td;
}
