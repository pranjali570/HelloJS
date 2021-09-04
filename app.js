const element = document.querySelector('#selectme')
console.log(element)

// to change content of element

element.innerHTML = "modified content using javaScript"
console.log(element)

// to change styles
 
element.style = 'margin:auto'
element.style = 'width:80%'
element.style.color = "cyan"
element.style.fontSize = "40px"

// to show classlist

console.log(element.classList)

// to add class 

element.classList.add('five')
console.log(element.classList)

// to remove class

element.classList.remove('two')
console.log(element.classList)

//to check class and accordingly add and remove the class
const body = document.querySelector('body')
console.log(body.classList.toggle('dark'))

// to check element contains the class specified or not
const value = element.classList.contains('three')
console.log(value)

