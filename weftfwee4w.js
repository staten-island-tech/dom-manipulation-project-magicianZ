


const DOMSelectors = {
    button:document.getElementById("btn"),
    blackbox:document.getElementById("blackbox"),
    text: document.querySelector("#text"),
    input:document.querySelector("input"),
    input1:document.querySelector("#input")

}


function backgroundtext(background,text){
    background.style.height = "500px";
    text.textContent = "red boxeeeeeee";
}









DOMSelectors.button.addEventListener("click",function(){
    let input = DOMSelectors.input.value;
    let input1 = DOMSelectors.input1.value;
    console.log(input)
    DOMSelectors.blackbox.insertAdjacentHTML("beforeend",
    `
    <div id="bocks"
        <p> ${input}</p>
        <p>${input1}</p>
    
    
    `
    
    
    
    )})