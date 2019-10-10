/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector('.carousel-container');

function carousel() {
  //create elements
  const carousel = document.createElement('div');
  const left = document.createElement('div');
  const right = document.createElement('div');
  const mountains = document.createElement('img');
  const computer = document.createElement('img');
  const trees = document.createElement('img');
  const turntable = document.createElement('img');

  const display = document.createElement('div')
  const arr = [mountains,computer,trees,turntable]
  let i = 0;

  //add classes
  carousel.classList.add('carousel')
  left.classList.add('left-button')
  right.classList.add('right-button')
  display.classList.add('display')

  //nesting elements
  carouselContainer.appendChild(carousel);
  carousel.appendChild(left)
  carousel.appendChild(display)
  carousel.appendChild(right)
  display.appendChild(arr[0])

  //add sources
  mountains.src = './assets/carousel/mountains.jpeg'
  computer.src = './assets/carousel/computer.jpeg'
  trees.src = './assets/carousel/trees.jpeg'
  turntable.src = './assets/carousel/turntable.jpeg'

  //add event listeners
  left.addEventListener('click', (event) =>{
    display.removeChild(arr[i])
     i == 0 ? i = 3 : i--;
     console.log(i)
    display.appendChild(arr[i])
  })
  right.addEventListener('click',(event) =>{
    display.removeChild(arr[i])
     i == 3 ? i = 0 : i++
     console.log(i)
    display.appendChild(arr[i])
  })
}
carousel()





