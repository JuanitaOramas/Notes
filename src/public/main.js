// archivo del frontend

import {loadNotes, onNewNote} from './socket.js';
import {onHandleSubmit, renderNotes, appendNote} from './ui.js';


onNewNote(appendNote);
loadNotes(renderNotes);

// Form notes
const noteForm = document.querySelector('#noteForm')


noteForm.addEventListener('submit', onHandleSubmit)