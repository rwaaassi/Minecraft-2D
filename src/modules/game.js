// class Game {
//   constructor() {
//     this.startButton = document.getElementById("start-game");
//   }

//   startGame() {
//     this.startButton.addEventListener("click", this.showWorld.bind(this));
//   }

//   showWorld() {
//     const landingPage = document.getElementsByClassName("hidden")[0];
//     const game = document.getElementsByClassName("hidden2")[0];
//     landingPage.style.display = "none";
//     game.style.display = "block";
//   }

//   updateWorld() {
//     // Implementation here
//   }

//   resetGame() {
//     const reset = document.getElementById("reset-board-button");
//     reset.addEventListener("click", () => {
//       // Implementation here
//     });
//   }
// }

// Initialize the game
// const game = new Game();
// game.startGame();


// class Game {
//   constructor(world, player, ui) {
//     this.world = world;
//     this.player = player;
//     this.ui = ui;
//     this.startButton = document.getElementById("start-game");
//     this.resetButton = document.getElementById("reset-game");
//     this.startButton.addEventListener("click", this.startGame.bind(this));
//     this.resetButton.addEventListener("click", this.resetGame.bind(this));
//   }

//   startGame() {
//     this.world.generateWorld();
//   }

//   resetGame() {
//     this.world.generateWorld();
//   }
// }