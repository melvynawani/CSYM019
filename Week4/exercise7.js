

var element;
//var element2;
var element3;
var element4;
function displayText(){
   element = document.getElementById('textBox') ;
   element3.firstChild.nodeValue = element.value;

}

function myLoadFunction(){
    element = document.getElementById('textBox');
    // element2 = document.getElementById('submitButton');
    element.addEventListener('keyup', displayText);
    element3 = document.getElementById('myDiv'); 
}

document.addEventListener('DOMContentLoaded', myLoadFunction);