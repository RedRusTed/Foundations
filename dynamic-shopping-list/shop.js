const list = document.querySelector("ul")

const inputLine = document.querySelector("input")

const btn = document.querySelector("button")
btn.addEventListener("click",btnClicked)

function btnClicked(e){
    e.preventDefault()
    const inputValue = inputLine.value
    inputLine.value = ""

    
    const listItem = document.createElement("li")
    const span = document.createElement("span")
    const btn2 = document.createElement("button")
    
    btn2.addEventListener('click',() => {
        listItem.remove()
    })

    listItem.appendChild(span)
    listItem.appendChild(btn2)

    span.textContent = inputValue
    btn2.textContent = "Delete"

    list.appendChild(listItem)
    inputLine.focus()
}



