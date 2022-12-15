let translate = document.getElementById("translate-btn")
let userInput = document.getElementById("user-ipt")
let output = document.getElementById("output-area")

var serverUrl = "https://api.funtranslations.com/translate/ferb-latin.json"

function errorHandler(error) { console.log(`error ocurred ${error}`) }

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function clickhandler() {
    var inputText = userInput.value
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json =>
            output.textContent = json.contents.translated)

        .catch(errorHandler)
}

translate.addEventListener("click", clickhandler)

