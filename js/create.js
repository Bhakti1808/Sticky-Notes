import{ margin,rotate,color} from './animate.js';
import { dlt } from './dlt.js';
import { dox } from './dox.js';

var container2 = document.getElementsByClassName("container2")[0];
var text = document.getElementById("note-text");
var checkIcon = document.getElementById("check-icon");
checkIcon.addEventListener("click",dox)

export function createNote(id,txt){
const notes =JSON.parse(localStorage.getItem("noteText")) ||[];
localStorage.setItem("noteText",JSON.stringify(notes));


    var text = document.getElementById("note-text");
    // text.value = text;
    var node0 = document.createElement("div");
    node0.setAttribute("id", id)
    node0.classList.add("thumb")
    var node1 = document.createElement("h1");
    
    node1.innerHTML = tr(txt);
    node1.setAttribute("style",
    "box-shadow: 0px 10px 24px 0px rgb(0,0,0,0.75);  height:auto; min-height:250px;  width:250px; padding:25px;  margin-top:20px; overflow:hidden; font-size:20px; word-wrap:break-word;")
    node1.style.margin=margin();
    node1.style.transform=rotate();
    node1.style.background=color();
  
    node0.appendChild(node1);
    container2.insertAdjacentElement("beforeend",node0);  
  
    node0.addEventListener("mouseenter",function(){
      node0.style.transform="scale(1.1)";
    })
    node0.addEventListener("mouseenter",function(){
      node0.style.transform="scale(1)";
    })
    var ho = document.querySelectorAll(".thumb");
    for (let i = 0; i < ho.length; i++) {
      ho[i].addEventListener("dblclick", function(){
        dlt(ho[i].getAttribute("id"))
        ho[i].remove()
      })
    }

   document.getElementById("note-text").value='';
  }
function tr(html) {
// console.log("Changing HTMl")
    return html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}