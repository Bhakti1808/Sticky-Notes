var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];

var checkIcon = document.getElementById("check-icon");
var xIcon = document.getElementById("x-icon");
var i = 0;

xIcon.addEventListener("click",function(){
  typeNote();
})

checkIcon.addEventListener("click",dox)

function dlt(id){
  console.log(id);
  const index = notes.findIndex(item => item.id == id)
  console.log(index)
  if(index == -1) return;
  notes.splice(index,1)
  localStorage.setItem("noteText",JSON.stringify(notes));

}
function typeNote(){
  if (container3.style.display == "none") {
    container3.style.display ="block";    
  } else {
    container3.style.display ="none";
  }
}

const notes =JSON.parse(localStorage.getItem("noteText")) ||[];

function createNote(id,text){
  var text = document.getElementById("note-text").value;
  var node0 = document.createElement("div");
  node0.setAttribute("id", id)
  node0.classList.add("thumb")
  var node1 = document.createElement("h1");
  
  node1.innerHTML = text;
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
 document.getElementById("note-text").value='';
}
function margin(){
  var random_margin = ["-5px","1px","5px","10px","15px","20px"]
  return random_margin[Math.floor(Math.random()*random_margin.length)];
}
function rotate(){
  var random_rotate =["rotate(3deg)","rotate(1deg)","rotate(-1deg)",,"rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"]
  return random_rotate[Math.floor(Math.random()*random_rotate.length)];
}
function color(){
  var random_color = ["#E5CCFF","lightblue","lightgreen","lightpink","lightgray","#F0E68C"]
  if (i > random_color.length-1) {
    i=0;
  }
  return random_color[i++]
} 

function dox(){
  var text = document.getElementById("note-text").value;
  const obj={
    id: Math.floor(Math.random() * 100000),
    noteText: text
  }
  notes.push(obj);
  createNote(obj.id,obj.text);
    localStorage.setItem("noteText",JSON.stringify(notes));
    var ho = document.querySelectorAll(".thumb");
    for (let i = 0; i < ho.length; i++) {
      ho[i].addEventListener("dblclick", function(){
        dlt(ho[i].getAttribute("id"))
        ho[i].remove()
      })
    }
}
stay();

function stay(){
  notes.forEach(ro  => {
    createNote(ro.id,ro.text)
  })
}