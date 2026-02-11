const noteInput = document.getElementById('noteInput');
const addBtn = document.getElementById('addBtn');
const noteList = document.getElementById('noteList');
const clearBtn = document.getElementById('clearBtn');


function renderNotes() {
    noteList.innerHTML = '';

    if (!notes) {
        notes = [];
    }

    notes.forEach((note) => {
        const li = document.createElement('li');
        li.textContent = note;
        noteList.appendChild(li);
    })
}

function saveAndRender() {
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

let notes = JSON.parse(localStorage.getItem('notes')) || [];
renderNotes();


addBtn.addEventListener('click', () => {
    const noteText = noteInput.value;

    if (noteText.trim() !== "") {
        notes.push(noteText);
        saveAndRender();
        noteInput.value = '';
    }
})

clearBtn.addEventListener('click', () => {
    notes = [];
    saveAndRender();
})