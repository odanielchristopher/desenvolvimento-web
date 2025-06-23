document.addEventListener('DOMContentLoaded', async () => {
  const table = document.getElementById('table-body');

  const response = await fetch('http://localhost:3001/alunos');
  const data = await response.json();

  data.forEach((aluno, id) => {
    const row = table.insertRow(id);

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.innerHTML = aluno.id;
    cell2.innerHTML = aluno.name;
    cell3.innerHTML = aluno.course;
    cell4.innerHTML = aluno.IRA;
  });

  const media = document.getElementById('media');

  const mediaCell = media.insertCell(1);

  mediaCell.innerHTML = data.reduce((acc, curr) => acc + curr.IRA, 0) / data.length;
});