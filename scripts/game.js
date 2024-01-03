const gameDisplay = document.querySelector('div#game-display')
const gameBody = document.getElementsByTagName('body')[0]
var gameState = 'menuMain'
const gameSoundClick = new Audio('assets/sound/start.mp3')

// game is loaded
window.addEventListener('load', function(){
  // remove the "index.html" from the url
  this.history.pushState({screen: 'main'}, 'BITXOS GAME', '/')

  // load game main menu when page is loaded
  if(gameState == 'menuMain'){
    menuMain()
  }
})


/* MENU SYSTEM */
function menuMain(){
  /* localStorage.removeItem('bitxoName') */
    // reset gameDisplay
    gameDisplay.innerHTML = ''

    // log current screen
    console.log('Main menu')

    // creating the container for main menu
    const menuMainContainer = document.createElement('div')
    menuMainContainer.id = 'menuMain'
    menuMainContainer.className = 'menu-main'

    // game title
    const title = document.createElement('h1')
    title.textContent = 'bitxos'
    title.id = 'title'
    title.className = 'title'

    // start game btn
    const gameBtnPlay = document.createElement('button')
    gameBtnPlay.textContent = 'PLAY'
    gameBtnPlay.id = 'game-btn-play'
    gameBtnPlay.className = 'button'

    // credits
    const credits = document.createElement('div')
    credits.className = 'credits'

    // credits information
    const creditsText = document.createElement('p')
    creditsText.innerHTML = 'Game developed by <a href="#" target="_blank">Tiago Guerreiro</a>'
    creditsText.id = 'credits-text'
    creditsText.className = 'text'

    // adding elements to the game display
    gameDisplay.appendChild(menuMainContainer)
    menuMainContainer.appendChild(title)
    menuMainContainer.appendChild(gameBtnPlay)
    menuMainContainer.appendChild(credits)
    credits.appendChild(creditsText)

    // click play button
    gameBtnPlay.addEventListener('click', function(){
        menuMainContainer.style.display = 'none'
        game()
    })
}

function game(){
  console.log(localStorage.getItem('data'))
  if(!localStorage.getItem('bitxoName')){
    while(true){
      var bitxoName = window.prompt('Welcome, give a name to your bitxo')
      if(bitxoName){
        localStorage.setItem('bitxoName', bitxoName)
        break
      }
    }
  }
  console.log(localStorage.getItem('bitxoName'))
  // reset display
  gameDisplay.innerHTML = ''
  
  // log current screen
  console.log('Game')
  
  // maybe add this, to prevent page reload, may lose game progress
  /* window.addEventListener('beforeunload', function(event){
    event.preventDefault()
  }) */

  // creating elements for game
  // navbar
  const navbar = document.createElement('nav')
  navbar.id = 'game-navigation'
  navbar.className = 'navbar'

  // navbar buttons
  const navbarBtnLabels = ['Status', 'Kitchen', 'Bathroom', 'Play', 'Social', 'Care', 'Bedroom', 'Study']

  navbarBtnLabels.forEach(label => {
    const navbarBtn = document.createElement('button')
    navbarBtn.textContent = label
    navbarBtn.type = 'button'
    navbarBtn.id = `game-btn-${label.toLowerCase()}`
    navbarBtn.className = 'game-btn'

    // adding buttons to the navbar
    navbar.appendChild(navbarBtn)
  })

  // game area
  const gamePlayArea = document.createElement('div')
  gamePlayArea.id = 'game-play-area'
  gamePlayArea.className = 'game-play-area'

  gameDisplay.style.backgroundImage = 'url(assets/images/spaces/bathroom.jpg)'

  // game bitxo stats
  const gamePlayNeeds = document.createElement('div')
  gamePlayNeeds.id = 'game-play-needs'
  gamePlayNeeds.className = 'game-play-needs'

  // stats section 1
  const gamePlayNeedsCol1 = document.createElement('section')
  gamePlayNeedsCol1.id = 'game-play-needs-column'
  gamePlayNeedsCol1.className = 'game-play-needs-column'

  // adding elements into the game display
  gameDisplay.appendChild(navbar)
  gameDisplay.appendChild(gamePlayArea)
  gameDisplay.appendChild(gamePlayNeeds)
  gamePlayNeeds.appendChild(gamePlayNeedsCol1)

  /* 
        <section id="game-play-needs-column" class="game-play-needs-column">
          <span>BITXO NAME NEEDS</span>
        </section>
        <section id="game-play-needs-column" class="game-play-needs-column">
          <label for="ihunger">Hunger </label>
          <meter id="ihunger" low="20" high="90" min="0" max="100" value="100"></meter><br>
          <label for="ibladder">Bladder </label>
          <meter id="ibladder" low="20" high="90" min="0" max="100" value="5"></meter><br>
          <label for="ienergy">Energy </label>
          <meter id="ienergy" low="20" high="90" min="0" max="100" value="50"></meter><br>
        </section>
        <section id="game-play-needs-column" class="game-play-needs-column">
          <label for="ifun">Fun </label>
          <meter id="ifun" low="20" high="90" min="0" max="100" value="100"></meter><br>
          <label for="isocial">Social </label>
          <meter id="isocial" low="20" high="90" min="0" max="100" value="5"></meter><br>
          <label for="ihygiene">Hygiene </label>
          <meter id="ihygiene" low="20" high="90" min="0" max="100" value="50"></meter><br>
        </section>
  
  */
}

/* 

<!-- Game canvas -->
<canvas id="c"></canvas>

<!-- Gameplay HUD -->
<div class="hud">
  <div class="hud__score">
    <div class="score-lbl"></div>
    <div class="cube-count-lbl"></div>
  </div>
  <div class="pause-btn"><div></div></div>
  <div class="slowmo">
    <div class="slowmo__bar"></div>
  </div>
</div>

<!-- Menu System -->
<div class="menus">
  <div class="menu menu--pause">
    <h1>Paused</h1>
    <button type="button" class="resume-btn">RESUME GAME</button>
    <button type="button" class="menu-btn--pause">MAIN MENU</button>
  </div>
  <div class="menu menu--score">
    <h1>Game Over</h1>
    <h2>Your Score:</h2>
    <div class="final-score-lbl"></div>
    <div class="high-score-lbl"></div>
    <button type="button" class="play-again-btn">PLAY AGAIN</button>
    <button type="button" class="menu-btn--score">MAIN MENU</button>
  </div>
</div>


*/