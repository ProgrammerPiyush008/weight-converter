const poundInput = document.querySelector(".pound-input")
const kilogramInput = document.querySelector(".kilogram-input")
const gramsInput = document.querySelector(".grams-input")

kilogramInput.addEventListener("input", () => {
    gramsInput.value = kilogramInput.value * 1000
    poundInput.value = kilogramInput.value * 2.20
})

gramsInput.addEventListener("input", () => {
    kilogramInput.value = gramsInput.value / 1000
    poundInput.value = gramsInput.value * 454
})

poundInput.addEventListener("input", () => {
    kilogramInput.value = poundInput.value / 2.20
    gramsInput.value = poundInput.value / 454
})