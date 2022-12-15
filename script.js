let translate = document.getElementById("translate-btn")
let userInput = document.getElementById("user-ipt")
let output = document.getElementById("output-area")

translate.addEventListener("click", translation)


function translation() {
    let userInputValue = userInput.value
    console.log(userInputValue)
}