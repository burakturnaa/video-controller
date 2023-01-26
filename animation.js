
document.addEventListener('DOMContentLoaded', (event) => {

  let loopAnimation = document.getElementById("animasyon1")

  loopAnimation.play()

  function setIntervalAndExecute(fn, t) {
    fn();
    return(setInterval(fn, t));
  }

  function loadAdnimation(){ loopAnimation.currentTime = 0 }
  var loopAnimationInterval = setIntervalAndExecute(loadAdnimation, 11000)
  let currentAnimation = "loop"

  const ws = new WebSocket("ws://localhost:8082");
    ws.addEventListener('message', function (event) {
      let myMessage = JSON.parse(event.data)
      console.log('Message from server ', myMessage);
      clearInterval(loopAnimationInterval)
      if (myMessage == 1) {
        currentAnimation = 'feed'
        loopAnimation.currentTime = 33

        loopAnimation.addEventListener('timeupdate', (e) => {
          if (e.srcElement.currentTime > 57 && currentAnimation == 'feed') {
            loopAnimationInterval = setIntervalAndExecute(loadAdnimation, 11000)

            return
          }
        });

      }

      if (myMessage == 2) {
        currentAnimation = "touch"
        loopAnimation.currentTime = 12
        loopAnimation.addEventListener('timeupdate', (e) => {
          if (e.srcElement.currentTime > 32 && currentAnimation == 'touch') {
          loopAnimationInterval = setIntervalAndExecute(loadAdnimation, 11000)
          return
          }
        });

      }
    }
  )

}, false);
