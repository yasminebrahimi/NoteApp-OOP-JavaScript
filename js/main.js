import NotesAPI from "./noteAPI";
import notesAPI from "./noteAPI";
import notesView from "./notesView";


const app = document.getElementById("app"); 


const view = notesView(app, {
  onNoteAdd(){
    console.log("note has been added"); 
  },

  onNoteEdit(newTile, newBody){
    console.log(newTitle, newBody); 
  },

  onNoteSelect(noteId){
    console.log(noteId);
  },

  onNoteDelete(noteId){
    console-log(noteId); 
  }
}); 

view.updateNoteList(NotesAPI.getAllNotes()); 
view.updateActiveNote(NotesAPI.getAllNotes()[0]);