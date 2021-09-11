const input = document.querySelector('.wordInput');
const translateButton = document.querySelector('.btn');
const outputE = document.querySelector('#output');
var serverUrl = "https://funtranslations.com/dolan";
function getTranslation(text){
    return serverUrl + "? "+ "text" + text
}
function errorHandler(){
    console.log("error occured" , error);

}

function translateText(){
    var inputText = input.value;
    fetch(getTranslation(inputText))
    .then(response => response.json)
    .then(json=> console.log(json.contents.translated))
    .catch(errorHandler)

  outputE.innerText = " In Dolan..... " + inputText;
  
  
  
};

translateButton.addEventListener("click" ,translateText)