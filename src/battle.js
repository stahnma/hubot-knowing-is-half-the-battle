/* 

 Description: 
   Randomly sends a GI Joe knowing is half the battle image

 Dependencies: 
   none

 Configuration: 
   none

 Commands:
   none

 Author: 
   stahnma

 Category: workflow

*/

function randomKnow() {
  var knowing = new Array();
  knowing[0] = "https://i.imgur.com/yZqAF7e.gif"
  knowing[1] = "https://i.imgur.com/1jcvTBp.jpg"
  knowing[2] = "https://i.imgur.com/s88AWgH.png"
  index = Math.floor(Math.random() * knowing.length);
  return knowing[index];
}

module.exports = function(robot) {
  robot.hear(/knowing is half the battle/i, function(msg) {
    msg.send(randomKnow());
  });
}
