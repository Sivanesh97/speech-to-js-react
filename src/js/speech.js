import { processing } from './js'

var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList
var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent

const recognition = new SpeechRecognition()
let word = "";
// Keeps works while keep on speaking or Else wait for particular time
// recognition.interimResults = true    
// recognition.continuous = true



    // console.log(recognition.grammars)

// There's a small issue like thing that after one complete sentence is completed then it ends emitting a 'end' event
// To make it continuous


// say quit to stop the recognition
recognition.onend = () => {
     if( word != "quit" )
        recognition.start()              
}


recognition.start()

export default recognition