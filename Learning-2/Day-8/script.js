const container = document.getElementById('container')
const colors = ['#ade8f1','#d3e8a3','#9450d9','#3cc257','#f74a05','#ade7e1','#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71' , '#fde8f1' ]
const SQUARES = 2960

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}

function setColor(element) {
   const color = getRandomColor()
   element.style.background = color
   element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
   element.style.background = '#1d1d1d'
   element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    var num =Math.ceil(Math.random() * colors.length);
   console.log("num",num,Math.random()* colors.length);
    return colors[num];
}