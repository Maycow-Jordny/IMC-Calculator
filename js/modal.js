const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

export const modal = {
    weight: inputWeight.value,
    height: inputHeight.value,
    wrapper: document.querySelector('.modal-wrapper'),
    massage: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),
    alertError: document.querySelector('.alert-error'),

    open() {
        modal.wrapper.classList.add('open')
    },
    close() {
        modal.wrapper.classList.remove('open')
    },
    clearFilds() {
        inputWeight.value = ""
        inputHeight.value = ""
    },

    showAlert() {
        modal.alertError.classList.add('open')
    },

    hiddenAlert() {
        modal.alertError.classList.remove('open')
    }



}


modal.buttonClose.onclick = function () {
    modal.close()
    modal.clearFilds()

}


window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
    if (event.key === 'Escape') {
        modal.close()
        modal.clearFilds()
    }
}
