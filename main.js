(function stopWatch() {
    const seconds = document.querySelector('.seconds');
    const tens = document.querySelector('.tens');
  
    const startBtn = document.querySelector('.btn-start');
    const stopBtn = document.querySelector('.btn-stop');
    const resetBtn = document.querySelector('.btn-reset');
  
    let secondsCounter = 0;
    let tensCounter = 0;
    let watch;
  
    function increment() {
        tensCounter++;
      
        if (tensCounter < 10) {
          tens.textContent = '0' + tensCounter;
        } else if (tensCounter >= 99) {
          tensCounter = 0;
          secondsCounter++;
      
          if (secondsCounter < 10) {
            seconds.textContent = '0' + secondsCounter;
          } else {
            seconds.textContent = secondsCounter;
          }
        } else {
          tens.textContent = tensCounter;
        }
      }
  
    startBtn.addEventListener('click', () => {
        watch = setInterval(increment, 10);
    });
      
    stopBtn.addEventListener('click', () => {
      clearInterval(watch);
    });
    
    resetBtn.addEventListener('click', () => {
      secondsCounter = 0;
      tensCounter = 0;
      seconds.textContent = '00';
      tens.textContent = '00';
    });
  })();