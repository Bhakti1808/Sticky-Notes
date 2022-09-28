export function dlt(id){
const notes =JSON.parse(localStorage.getItem("noteText")) ||[];

    console.log(id);
    const index = notes.findIndex(item => item.id == id)
    console.log(index)
    if(index == -1) return;
    notes.splice(index,1)
    localStorage.setItem("noteText",JSON.stringify(notes));
  
  }