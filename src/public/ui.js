// logica interfaz


import {saveNotes, deleteNote} from "./socket.js";


const notesList = document.querySelector('#notes')

const noteUI = note => {
    const div = document.createElement('div')
    div.innerHTML = `
        <div>
            <h1>${note.title}</h1>
            <div>
                <button class="delete" data-id="${note._id}"> Delete </button>
                <button> Update </button>
            </div>
            <p>${note.description}</p>
        </div>
    `
    const btnDelete = div.querySelector('.delete')

    btnDelete.addEventListener('click', e => deleteNote(btnDelete.dataset.id))
    return div
} 


export const renderNotes = notes => {
    notesList.innerHTML="";
    // A cada nota, le asgina un elmento div
    // lista de notas recorro por cada nota el elemento notelist le añado una porcion de nota
    notes.forEach(note => notesList.append(noteUI(note)))
    
    

}

// maneja el evento de enviar
export const onHandleSubmit = (event) => {
    // quitar evento de refrescar pagina cuando se envia
    event.preventDefault();
    saveNotes(
        noteForm['title'].value, 
        noteForm['description'].value
    );
};

export const appendNote = note =>{
    notesList.append(noteUI(note));
}