const pageviews = [10, 50, 100, 500, 1000]
const prices = [8, 12, 16, 24, 36]


const startMyTrial = document.querySelector('#button')
const sliderRound = document.querySelector('.slider.round')
const discount25 = document.querySelector('.discount')
const inputCheck = document.querySelector('#input-check')
const dollarPrice = document.querySelector('#m-price')
const sliderBar = document.querySelector('#slider-bar')
const kPageviews = document.querySelector('#k-pageviews')
const iconSlider = document.querySelector('#icon-slider')



sliderBar.oninput = () => {
    kPageviews.innerHTML = sliderBar.value
    
    if (sliderBar.value < 50) { 
        dollarPrice.innerHTML = `${prices[0]}`
    } else if (sliderBar.value < 100) {
        dollarPrice.innerHTML = `${prices[1]}`
    } else if (sliderBar.value < 500) {
        dollarPrice.innerHTML = `${prices[2]}`
    } else if (sliderBar.value < 1000) {
        dollarPrice.innerHTML = `${prices[3]}`
    } else {
        dollarPrice.innerHTML = `${prices[4]}`
        kPageviews.innerHTML = '1M'
    }
}