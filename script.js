let colors = ['green', 'yellow', 'red', 'purple', 'blue','white', 'grey','pink','orange' ]

let color = document.getElementById('color')
let btn = document.getElementById('btn')
let body = document.getElementById('body')

btn.addEventListener('click', function(){
   let randomColor = Math.floor(Math.random() * colors.length)
   body.style.background = colors[randomColor]
   btn.style.background = colors[randomColor]
   color.textContent = colors[randomColor]

})