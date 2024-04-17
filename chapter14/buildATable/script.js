const mountains = [
  {
    name: 'Kilimanjaro',
    height: 5895,
    place: 'Tanzania'
  },
  {
    name: 'Everest',
    height: 8000,
    place: 'Nepal'
  }
]

function loadTable() {
  const mountainsTable = document.getElementById("mountains");
  const header = mountainsTable.appendChild(document.createElement('tr'));

  for (const headerKey in mountains[0]) {
    header.appendChild(document.createElement('th')).textContent = headerKey;
  }

  for (const mountain of mountains) {
    const row = mountainsTable.appendChild(document.createElement('tr'));
    row.appendChild(document.createElement('td')).textContent = mountain.name;
    const heightData = row.appendChild(document.createElement('td'));
    heightData.textContent = mountain.height;
    heightData.style.textAlign = "right";

    row.appendChild(document.createElement('td')).textContent = mountain.place;
  }
}