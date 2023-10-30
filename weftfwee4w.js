


const DOMSelectors = {
    button:document.getElementById("btn"),
    blackbox:document.getElementById("blackbox"),
    text: document.querySelector("#text"),
    attunementinput:document.querySelector("input"),
    mantrainput:document.querySelector("#input1"),
    starinput:document.querySelector("#input2"),
    remove:document.querySelector("#removebtn")

}


function backgroundtext(background,text){
    background.style.height = "500px";
    text.textContent = "red boxeeeeeee";
}













DOMSelectors.button.addEventListener("click",function(){
    let input = DOMSelectors.attunementinput.value;
    let input1 = DOMSelectors.mantrainput.value;
    let input2 = DOMSelectors.starinput.value;



    DOMSelectors.blackbox.insertAdjacentHTML("beforeend",
    `
    <div id="bocks"
        <p> ${input}</p>
        <p>${input1}</p>
        <img src="${input2}" alt="mantrea" width="200" height="200">
        <button type="button" id="removebtn">remove i think</button>
    
    
    `
    
    
    
    )})

function remove(){
    let remove = document.querySelector("#removebutton")
    remove.forEach((btn)=>
    btn.addEventListener("click",function(event){
        console.log(event.target.parentElement)
    }))
    }
remove()