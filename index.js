let container = document.createElement("div")
container.setAttribute("id", "container")//the container <----------------------------------

document.body.appendChild(container)
//the sketch portrait
container.setAttribute("style", "display:grid;width:500px;height:500px;border:2px solid purple;background-color:white")
document.body.setAttribute("style", "background-color:blue")
//nice color, nice stuff
//now time to make responsive stuff, based on height and stuff

let inputStuff = document.createElement("input")
inputStuff.setAttribute("style", "width:100px")
document.body.appendChild(inputStuff)

let applyButton = document.createElement("button")
applyButton.setAttribute("style","width: 50px")
applyButton.innerText = "Apply";
document.body.appendChild(applyButton)

let sizeInPixels;
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