import state from './state.js'
import * as el from './elements.js' /*el = elementos */
import {reset} from "./actions.js"
import { kitchenTimer } from './sound.js'

export function countdown() {

  clearTimeout(state.countdownId)

  if(!state.isRunning) { //se nao estiver executando, para!
    return
  }

  let minutes = Number(el.minutes.textContent) //transformamos os minutos em NUMEROS
  let seconds = Number(el.seconds.textContent) //

  seconds-- //decrementa os segundos

  if (seconds < 0 ) { //se o segundo for menor que 0, ele atualiza para .59
    seconds = 59
    minutes--  //decrementa os minutos
  }

  if (minutes < 0) {
    reset() //quando os minutos chegarem a -1, reseta para 00
    kitchenTimer.play()
    return //retorna a aos minutos definidos no start, main.js
  }

  updateDisplay(minutes, seconds)

   state.countdownId = setTimeout(() => countdown(), 1000) //criamos um callback function, para a cada 1segundo ele executar o countdown
}


export  function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes     /* ?? nllish coalesing operator */
  seconds = seconds ?? state.seconds  /* se os seconds for null, irá pegar do state */

  el.minutes.textContent = String(minutes).padStart(2, "0") //pegamos do elemento, minuto e transformamos em string, definimos que ira conter
  //2 caracteres, e o primeiro será 0
   
  el.seconds.textContent = String(seconds).padStart(2, "0") //pegamos do elemento, seconds e transformamos em string, definimos que ira conter
  //2 caracteres, e o primeiro será 0
}