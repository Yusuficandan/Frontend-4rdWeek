

let greeting = document.querySelector('#greeting')

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class","third-class")


greeting.classList.remove("text-primary")
console.log(greeting.classList)