const randomizerButton = document.querySelector('.randomizer-button')


function randomizer() {

    const minNumber = Math.ceil(document.querySelector('.min-btn1').value)
    const maxNumber = Math.floor(document.querySelector('.max-btn2').value)

    const result = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber

    alert(result)
    
}

randomizerButton.addEventListener('click', randomizer)