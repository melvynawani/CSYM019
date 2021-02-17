

var element;
var element2;
var element3;
var element4;
function firstFunction(){
    //var element = document.getElementById('elementH1');
    element.firstChild.nodeValue='Element has been updated';
    
}

function secondFunction(){
    //var element2 = document.getElementById('paragraph1');
    element2.firstChild.nodeValue= 'Paragraph has been updated.';
    
} 

function mouseIsHere1(){
    element.firstChild.nodeValue='Mouse is here';
}

function mouseHasLeft1(){
    element.firstChild.nodeValue='Mouse just left';
}

function mouseIsHere2(){
    element2.firstChild.nodeValue='Mouse is here';
}

function mouseHasLeft2(){
    element2.firstChild.nodeValue='Mouse just left';
}

function myLoadFunction(){
    element = document.getElementById('elementH1');
    element.addEventListener('click', firstFunction);
    element.addEventListener('mouseenter', mouseIsHere1);
    element.addEventListener('mouseleave', mouseHasLeft1);
    element2 = document.getElementById('paragraph1');
    element2.addEventListener('click', secondFunction);
    element2.addEventListener('mouseenter', mouseIsHere2);
    element2.addEventListener('mouseleave', mouseHasLeft2);
    element3 = document.getElementById('elementH1');
    element4 = document.getElementById('paragraph1');
}

document.addEventListener('DOMContentLoaded', myLoadFunction);