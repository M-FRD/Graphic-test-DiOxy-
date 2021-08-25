const BURGER = document.querySelector('.bg-menu')
const BARRE1 = document.querySelector('.barre1')
const BARRE2 = document.querySelector('.barre2')
const BARRE3 = document.querySelector('.barre3')

BURGER.addEventListener('click',()=>{

BARRE1.classList.toggle('active')
BARRE2.classList.toggle('active')
BARRE3.classList.toggle('active')


})