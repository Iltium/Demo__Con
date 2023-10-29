// Slider
let offset = 0
const sliderLine = document.querySelector('.slider')

document.querySelector('.str-right').addEventListener('click', function(){
    offset += 760
    if(offset > 900){
        offset = -760
    }

    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.str-left').addEventListener('click', function(){
    offset -= 760
    if(offset < -900){
        offset = 760
    }

    sliderLine.style.left = -offset + 'px'
})

// Slider