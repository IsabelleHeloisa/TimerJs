


function timer(){
  let seconds = document.getElementById("seconds")
  let minutes = document.getElementById("minutes")
  let hours = document.getElementById("hours")

  let secondsInt = parseInt(seconds.textContent)
  
  seconds.textContent = secondsInt + 1
  if(secondsInt < 9){
    seconds.textContent = "0" + seconds.textContent
  }

  if(secondsInt === 59){
    seconds.textContent = "00"

    let minutesInt = parseInt(minutes.textContent)
    
    minutes.textContent = minutesInt + 1
    if(minutesInt < 9){
      minutes.textContent = "0" + minutes.textContent
    }
  
    if(minutesInt === 59){
      minutes.textContent = "00"

      let hoursInt = parseInt(hours.textContent)
  
      hours.textContent = hoursInt + 1
      if(hoursInt < 9){
        hours.textContent = "0" + hours.textContent
      }
    
    }
  }
}


var timerInterval = null

const start = document.getElementById("start")
start.addEventListener("click", ()=>{
  timerInterval = setInterval(timer, 1000); 
})

const stop = document.getElementById("stop")
stop.addEventListener("click", () =>{
  clearInterval(timerInterval);
})

const reset = document.getElementById("reset")
reset.addEventListener("click", () =>{
  clearInterval(timerInterval)
  seconds.textContent = "00"
  minutes.textContent = "00"
  hours.textContent = "00"

})

