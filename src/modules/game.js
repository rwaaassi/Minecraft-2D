class Game {
  constructor() {
    this.startButton = document.getElementById("start-game");
  }
  startGame() {
    this.startButton.addEventListener("click", this.showWorld());
  }
  showWorld() {
    const landingPage = document.getElementsByClassName("hidden");
    const game = document.getElementsByClassName("hidden2");
    landingPage.classList.display = "none";
    game.classList.display = "block";
  }
  updateWorld() {}
  resetGame() {
    const rest = getElementById("rest-board-button");
    rest.addEventListener("click", () => {
        
    })
  }
}
