


const DOMSelectors = {
    button:document.getElementById("btn"),
    blackbox:document.getElementById("blackbox"),
    text: document.querySelector("#text")
}


function backgroundtext(background,text){
    background.style.height = "500px";
    text.textContent = "red boxeeeeeee";
}

DOMSelectors.button.addEventListener("click",function(){
    backgroundtext(DOMSelectors.blackbox,DOMSelectors.text)
})