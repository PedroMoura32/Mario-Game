const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump')
    
    }, 500)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft

    if (pipePosition <= 250 && pipePosition > 0 && marioPosition < 170) {
        
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        
        mario.src = './img/game-over.png'
        mario.style.width = '150px'
        mario.style.marginLeft = '90px'
        
        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`
        // clouds.src = './img/over.png'
        // clouds.style.left = '700px'
        // clouds.style.bottom = '500px'
        // clouds.style.width = '1300px'

        document.

        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump)