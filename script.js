// Here are the different page view ranges and the corresponding monthly price totals:

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.


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




// sliderRound.addEventListener('click', () => {
//     if
//     dollarPrice.innerHTML = `${prices.map(item*0.75)}`

// })


// inputCheck.addEventListener('change', () => {
//     if (!this.checked) {
//         if (sliderBar.value < 50) {
//             dollarPrice.innerHTML = `${prices[0]*0.75}`
//         }
//     }
// })


// sliderRound.onclick = () => {
//     if (!inputCheck.checked) {
//         if (sliderBar.value < 50) {
//             dollarPrice.innerHTML = `$ ${prices[0]*0.75}`
//             discount25.style.visibility = 'visible'
//         } else if (sliderBar.value < 100) {
//             dollarPrice.innerHTML = `$ ${prices[1]*0.75}`
//             discount25.style.visibility = 'visible'
//         } else if (sliderBar.value < 500) {
//             dollarPrice.innerHTML = `$ ${prices[2]*0.75}`
//             discount25.style.visibility = 'visible'
//         } else if (sliderBar.value < 1000) {
//             dollarPrice.innerHTML = `$ ${prices[3]*0.75}`
//             discount25.style.visibility = 'visible'
//         } else { 
//             if (sliderBar.value = 1000) {
//                 dollarPrice.innerHTML = `$ ${prices[4]}`
//                 discount25.style.visibility = 'visible'
//             }
//         }
//     } else {
//         if (sliderBar.value < 50) {
//             dollarPrice.innerHTML = `$ ${prices[0]}`
//             discount25.style.visibility = 'hidden'
            
//         } else if (sliderBar.value < 100) {
//             dollarPrice.innerHTML = `$ ${prices[1]}`
//             discount25.style.visibility = 'hidden'
//         } else if (sliderBar.value < 500) {
//             dollarPrice.innerHTML = `$ ${prices[2]}`
//             discount25.style.visibility = 'hidden'
//         } else if (sliderBar.value < 1000) {
//             dollarPrice.innerHTML = `$ ${prices[3]}`
//             discount25.style.visibility = 'hidden'
//         } else { 
//             if (sliderBar.value = 1000) {
//                 dollarPrice.innerHTML = `$ ${prices[4]}`
//                 discount25.style.visibility = 'hidden'
//             }
//         }
//     }
// }

// prices.map(price)











