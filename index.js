let container = document.getElementById("container");
let sizeInPixels;
let applyButton = document.getElementById("theButton");
let inputStuff = document.getElementById("theInput");
applyButton.addEventListener("click", ()=>{
    let amount = inputStuff.value;
    if (amount>100){
        alert("Limit is only 100, for safety purposes");
        alert("Change the size")
    }
    else if(amount<1){
        alert("Error, doesn't work, change the size")
    }
    else{
    sizeInPixels = 500 / amount;
    let numOfDivs = amount*amount;
    createDivs(numOfDivs,amount);
    }
})

function createDivs(numOfDivs,amount){
    container.innerHTML="";
    for(let i=0; i<numOfDivs;i++){
        let div= document.createElement("div");
        div.setAttribute("style", `width:${sizeInPixels}px;height:${sizeInPixels}px`)
        container.appendChild(div);
    }
    container.setAttribute("style", `grid-template-columns: repeat(${amount}, ${sizeInPixels}px)`)
}

container.addEventListener("mousedown", function(e){
    let thething = e.target;
    thething.setAttribute("style","background-color:red;");
})