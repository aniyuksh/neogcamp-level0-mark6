
var textInput = document.querySelector("#text-input");
var textOutput = document.querySelector("#text-output");
var btnTranslate = document.querySelector("#btn-translate");

var url = "https://api.funtranslations.com/translate/minion.json";
function getUrl(text){
  return url + "?" + "text=" + text;
}

function errorHandler(error){
  alert("Sorry");
}


function callEvent(){
  var textIn = textInput.value;
  fetch(getUrl(textIn))
  .then(response => response.json())
  .then(json => {
    var res = json.contents.translated;
    textOutput.innerText = res
  })
  .catch(errorHandler);
  
};


btnTranslate.addEventListener("click",callEvent);




// var clickButton = document.querySelector("#btn-translate");
// var inputText = document.querySelector("#text-input");
// var outputText = document.querySelector("#text-output");

// var url = "https://api.funtranslations.com/translate/minion.json";

// function getUrl(text){
//   return url + "?text=" + text;
// }

// function errorHandler(error){
//   console.log("OOPS, error occurred.!");
//   alert("Please try after some time...!")
// }
// function callEvent(){
//   var inpVal = inputText.value;

//   fetch(getUrl(inpVal))
//   .then(response => response.json())
 
//   .then(json => {
//   var res = json.contents.translated;
//   outputText.innerText = res})
//   .catch(errorHandler)
// };

// clickButton.addEventListener("click", callEvent);


// Nishta

// var buttonTransalte = document.querySelector("#btn-translate");
// var txt = document.querySelector("#text-input");
// var outputdiv = document.querySelector("#text-output");

// // outputdiv.innerText = "Nishtha"

// var serverUrl = "https://api.funtranslations.com/translate/minion.json";

// function getServerURL(text) {
//     return serverUrl + "?text=" + text;
// }

// function errorHandler(error) {
//     console.log("Error is :", error);
//     alert("Try Again!")
// }


// function clickHandler() {
//     var inputText = txt.value;

//     fetch(getServerURL(inputText))
//         .then(response => response.json())
//         .then(json => {
//             var translatedText = json.contents.translated;
//             outputdiv.innerText = translatedText;
//         })
//         .catch(errorHandler)
// };

// buttonTransalte.addEventListener("click", clickHandler);