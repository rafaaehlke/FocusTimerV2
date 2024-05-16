import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'


export function start(minutes, seconds) {
  state.minutes = String(minutes).padStart(2, "0")
  state.seconds = String(seconds).padStart(2, "0")

  timer.updateDisplay()

  events.registerControls()
  events.setMinutes()
}