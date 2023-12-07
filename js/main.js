import notesAPI from "./noteAPI";
import notesView from "./notesView";


const app = document.getElementById("app"); 


const view = notesView(app, {
  onNoteAdd(){
    console.log("note has been added"); 
  }
}); 