let container = document.getElementById("container");
let sizeInPixels;
let applyButton = document.getElementById("theButton");
let inputStuff = document.getElementById("theInput");
applyButton.addEventListener("click", ()=>{
    let amount = inputStuff.value
    sizeInPixels = 500 / amount;
    let numOfDivs = amount*amount;
    createDivs(numOfDivs);
})

function createDivs(numOfDivs){
    for(let i=0; i<numOfDivs;i++){
        let div= document.createElement("div");
        div.setAttribute("style", `width:${sizeInPixels}px;height:${sizeInPixels}px`)
        container.appendChild(div);
    }
}