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
      <div class="notes__samall-body">${body}</div>
      <div class="notes__samll-updated">Monday 1:30 PM</div>
    </div>
    `; 
    }

    updateNoteList(notes){

    }
}
