const newPar = document.createElement("p")
newPar.textContent = "hey"
newPar.style.color = "red"

const newH3 = document.createElement("h3")
newH3.textContent = "I'm a blue h3"
newH3.style.color = "blue"

const newDIV = document.createElement("div")
newDIV.style.backgroundColor = "pink"

const newH1 = document.createElement("h1")
newH1.textContent = "I'm in a div"

const newP = document.createElement("p")
newP.textContent = "ME TOO!"

newDIV.appendChild(newH1)
newDIV.appendChild(newP)


const container = document.getElementById("body")
container.appendChild(newPar)
container.appendChild(newH3)
container.appendChild(newDIV)
