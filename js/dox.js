import { createNote } from './create.js';

var checkIcon = document.getElementById("check-icon");
checkIcon.addEventListener("click",dox)


export function dox(){
const notes =JSON.parse(localStorage.getItem("noteText")) ||[];

    var text = document.getElementById("note-text");
    const obj={
      id: Math.floor(Math.random() * 100000),
      noteText: text.value
    }
    notes.push(obj);
    createNote(obj.id,obj.noteText);
    localStorage.setItem("noteText",JSON.stringify(notes));
  
  }