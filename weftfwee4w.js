


const DOMSelectors = {
    form: document.getElementById("forum"),
    button:document.getElementById("btn"),
    blackbox:document.getElementById("blackbox"),
    text: document.querySelector("#text"),
    attunementinput:document.querySelector("input"),
    mantrainput:document.querySelector("#input1"),
    starinput:document.querySelector("#input2"),
    remove:document.querySelector("#removebtn")

}




function create(){
    const ability  = {
        name1 : DOMSelectors.attunementinput.value,
        picture: DOMSelectors.mantrainput.value,
        rarity: DOMSelectors.starinput.value,
    }
    injectHTML(ability)
    


    
}

DOMSelectors.form.addEventListener("submit",function(event){
    event.preventDefault()
    create()


})



function injectHTML(){
   
    DOMSelectors.blackbox.insertAdjacentHTML("afterbegin",
    `
    <div id="bocks"
        <p> ${ability.name1}</p>
        <p>${ability.rarity}</p>
        <img src="${ability.picture}" alt="mantrea" width="200" height="200">
        
    <div>
    
    
    `)
  

}







