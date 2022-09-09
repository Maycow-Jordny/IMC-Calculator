import { modal } from "./modal.js"
import { alertError } from "./modal-error.js"
import { calculateIMC, notNumber } from "./utils.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value


    const weightOrheightIsNotNumber = notNumber(weight) || notNumber(height)

    if (weightOrheightIsNotNumber) {
        alertError.open()
        modal.clearFilds()
        return;
    } else {
        alertError.close()
    }


    const result = calculateIMC(weight, height)
    displayResultMessage(result)

}

inputHeight.oninput = () => alertError.close()
inputWeight.oninput = () => alertError.close()


function displayResultMessage(result) {
    const massage = `Seu IMC é de ${result}`

    modal.massage.innerText = massage
    modal.open()
}






