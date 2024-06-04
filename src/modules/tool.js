// class Tool {
//   constructor() {
//     this.selectedTool = null;
//     this.axe = document.querySelector(".axe");
//     this.pickAxe = document.querySelector(".pickaxe");
//     this.shovel = document.querySelector(".shovel");

//     this.axe.addEventListener("click", () => this.selectTool("axe"));
//     this.pickAxe.addEventListener("click", () => this.selectTool("pickaxe"));
//     this.shovel.addEventListener("click", () => this.selectTool("shovel"));
//   }

//   selectTool(tool) {
//     this.selectedTool = tool;
//     this.changeToolBackground();
//   }

//   getSelectedTool() {
//     return this.selectedTool;
//   }

//   changeToolBackground() {
//     document.querySelectorAll(".tool").forEach((toolElement) => {
//       toolElement.style.backgroundColor = toolElement.classList.contains(
//         this.selectedTool
//       )
//         ? "red"
//         : "";
//     });
//   }
// }
