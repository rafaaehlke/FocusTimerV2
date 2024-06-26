import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js"
import * as sounds from "./sound.js"

let startTime, elapsedTime = 0, running = true

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");
  startTime = performance.now() - elapsedTime;
  timer.countdown();
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute('contenteditable', true) //quando clicarmos no "set", podemos editar o minuto
  el.minutes.focus()
  
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if(state.isMute) {
    sounds.bgAudio.play()
    return
  }
  sounds.bgAudio.pause()
}
