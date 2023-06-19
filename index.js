const btnEl = document.getElementById('btn');
const appEl = document.querySelector('.app');
btnEl.addEventListener('click', addNote)
function addNote(){
    const notes = []
    const noteObj = {
        id:Math.floor(Math.random()*100000),
        content:'',
    };
    const noteEl = creatNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);
    notes.push(noteObj)
    saveNotes(notes);

}
function  saveNotes(notes){
    localStorage.setItem('note-app',JSON.stringify(notes))
}

function creatNoteEl(id, content){
    const element = document.createElement('textarea')
    element.classList.add('notes')
    element.placeholder = 'empty note'
    element.value = content
    element.addEventListener('dblclick', ()=>{
        const warning = confirm('delete')
        if(warning){
            deleteNote(id, element)
        }
    });
    element.addEventListener('inpute', ()=>{
        updateNote(id, element)

    });
    return element;
}
function deleteNote( ){}
function updateNote(){}
    
