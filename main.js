let saveEl = document.getElementById("save-el")
let countEL = document.getElementById("count-el")
console.log(countEL)
let count = 0
function increment() {
    count += 1
    countEL.textContent  = count
}
function save() {
    let counter = count + " - "
    saveEl.textContent += counter
    countEL.textContent = 0
    count = 0
}

