// event Listeners

const button = document.querySelector('button')
const element = document.querySelector('#selectme')
const body = document.querySelector('body')

console.log(button, element)

button.addEventListener('click', () => {
    element.style = 'background-color: powderblue; color:purple'

    body.classList.toggle('bright')

    console.log('you clicked me')
})