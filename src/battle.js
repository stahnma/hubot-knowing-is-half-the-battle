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

module.exports = (robot) => {
  robot.hear(/knowing is half the battle/i, (msg) => {
    const knowing = [
      'https://i.imgur.com/yZqAF7e.gif',
      'https://i.imgur.com/1jcvTBp.jpg',
      'https://i.imgur.com/s88AWgH.png',
    ];
    msg.send(msg.random(knowing));
  });
};
