const gameDisplay = document.querySelector('div#game-display')
const gameBody = document.getElementsByTagName('body')[0]
var gameState = 'menuMain'
const gameSoundClick = new Audio('assets/sound/start.mp3')

// game is loaded
window.addEventListener('load', function(){
    if(gameState == 'menuMain'){
        menuMain()
    }
})

/* window.addEventListener('beforeunload', function(event){
    event.preventDefault()
}) */

/* MENU SYSTEM */
function menuMain(){
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
    // reset display
    gameDisplay.innerHTML = ''
    console.log('Game')
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
  <div class="menu menu--main">
    <h1>MENJA</h1>
    <button type="button" class="play-normal-btn">PLAY GAME</button>
    <button type="button" class="play-casual-btn">CASUAL MODE</button>
    <div class="credits">An 8kB game by <a href="https://cmiller.tech">Caleb Miller</a></div>
  </div>
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