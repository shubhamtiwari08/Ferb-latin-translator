let translate = document.getElementById("translate-btn")
let userInput = document.getElementById("user-ipt")
let output = document.getElementById("output-area")

translate.addEventListener("click", translation)

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json"


function getUrl(text) {
    serverUrl + "?" + "text=" + text
}


function translation() {

    let userInputValue = userInput.value

    fetch(getUrl(userInputValue))
        .then(fetch)
}

