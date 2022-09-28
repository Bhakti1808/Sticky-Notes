import { dox } from "./dox.js";
import { createNote } from "./create.js";

var container3 = document.getElementsByClassName("container3")[0];
var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
// var txt = document.getElementById("txt")
var box = document.getElementById("good");
 
xIcon.addEventListener("click",function(){
    if (container3.style.display == "none") {
        container3.style.display ="block";    
        } else {
        container3.style.display ="none";
        }
})

checkIcon.addEventListener("click",dox)

box.addEventListener("click",function(){
    if (container3.style.display == "none") {
        container3.style.display ="block";    
        } else {
        container3.style.display ="none";
        }
})

stay();
  
function stay(){
const notes =JSON.parse(localStorage.getItem("noteText")) ||[];

  notes.forEach(ro => {
    createNote(ro.id,ro.noteText)
  });
}


    
