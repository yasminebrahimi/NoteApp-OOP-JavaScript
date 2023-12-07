export default class notesView{
    constructor(root, handlers){
        this.root = root; 
        const {onNoteAdd} = handlers; 
        this.onNoteAdd = onNoteAdd; 
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
        //run add note method!!

      }); 
    }
}
