export default class notesView {
    constructor(root, handlers) {
      this.root = root;
      const { onNoteAdd, onNoteEdit, onNoteSelect, onNoteDelete} = handlers;
      this.onNoteAdd = onNoteAdd;
      this.onNoteEdit = onNoteEdit;
      this.root.innerHTML = `
      <div class="notes__sidebar">
      <div class="notes__logo">NOTE APP</div>
      <div class="notes__list"></div>
      <button class="notes__add">ADD NOTE</button>
    </div>
    <div class="notes__preview">
      <input type="text" class="notes__title" placeholder="note title ..." />
      <textarea name="" class="notes__body">Take Note</textarea>
    </div>
      `;
  
      const addNoteBtn = this.root.querySelector(".notes__add");
      const inputTitle = this.root.querySelector(".notes__title");
      const inputBody = this.root.querySelector(".notes__body");
  
      addNoteBtn.addEventListener("click", () => {
        // run add note method !!
        this.onNoteAdd();
      });
  
      [inputBody, inputTitle].forEach((inputField) => {
        inputField.addEventListener("blur", () => {
          const newBody = inputBody.value.trim();
          const newTitle = inputTitle.value.trim();
          this.onNoteEdit(newTitle, newBody);
        });
      });
    }



    _creatListItemHTML(id, title, body, updated){
      const MAX_BODY_LENGTH = 50; 
      return `
      <div class="notes__list-item" data-node-id="${id}">
      <div class="notes__small-title">${title}</div>
      <div class="notes__samall-body">
      ${body.substring(0, MAX_BODY_LENGTH)}
      ${body.length > MAX_BODY_LENGTH ? "..." : ""}
      </div>
      <div class="notes__samll-updated">
      ${new Date(updated).toLocaleString("en", {
        dateStyle: "full",
        timeStyle: "short", 
      })}
      </div>
    </div>
    `; 
    }

    updateNoteList(notes){
      const notesContainer = this.root.querySelector(".notes__list"); 

      //empty noteList
      notesContainer.innerHTML = ""; 
      for(const note of notes){
        const {id,title,body,updated} = note; 
        const html = this._creatListItemHTML(id,title,body,updated); 
      }

    }
}
