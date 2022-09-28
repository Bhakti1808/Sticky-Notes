var i = 0;
export function margin(){
    var random_margin = ["-5px","1px","5px","10px","15px","20px"]
    return random_margin[Math.floor(Math.random()*random_margin.length)];
  }
export  function rotate(){
    var random_rotate =["rotate(3deg)","rotate(1deg)","rotate(-1deg)",,"rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"]
    return random_rotate[Math.floor(Math.random()*random_rotate.length)];
  }
export  function color(){
    var random_color = ["#E5CCFF","lightblue","lightgreen","lightpink","lightgray","#F0E68C"]
    if (i > random_color.length-1) {
      i=0;
    }
    return random_color[i++]
  } 