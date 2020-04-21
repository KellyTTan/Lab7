function init(){
    var name = document.getElementByClassName('center');
    var input = document.getElementById('entryinput');
    var output = document.getElementById('textoutput');
    var button = document.getElementById('entrybutton');
   
    button.addEventListener('click', function() {
         output.innerHTML = input.value;
         alert(name.textContent + ": " + input.value)
    });

}

window.addEventListener('load', init);
