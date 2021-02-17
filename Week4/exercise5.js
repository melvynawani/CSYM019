
function firstFunction(){
var element = document.getElementById('elementH1');
    element.firstChild.nodeValue='Element has been updated';
}

function secondFunction(){
    var element2 = document.getElementById('paragraph1');
    element2.firstChild.nodeValue= 'Paragraph has been updated.';
} 
document.addEventListener('click', firstFunction);
document.addEventListener('click', secondFunction);