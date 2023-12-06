const notes = [
    {
        id: 1, 
        title: "first note",
        body: "some texts",
        updated: "2021-10-31T15:02:00.411Z",
    },
    {
        id: 2,
        title: "second note", 
        body: "some texts",
        updated: "2021-10-31T15:03:23.556Z",
    },
    {
        id: 3, 
        title: "third note",
        body: "some text",
        updated: "2021-11-01T10:47:26-889Z"
    }

]; 




class NotesAPI{
    static getAllNotes() {
        const savedNotes = JSON.parse(localStorage.getItem("notes-app")) || [];
        return savedNotes.sort((a, b) => {
          return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        });
      }

    saveNote(){

    }

    deleteNote(){

    }
}


console.log(NotesAPI.getAllNotes())