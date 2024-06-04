// import Tile from "../modules/tile.js";
// class World {
//   constructor(tool) {
//     this.ground = document.getElementById("ground");
//     this.surface = document.getElementById("above");
//     this.bottom = document.getElementById("under");
//     this.tool = tool;
//   }

//   getGroundsize() {
//     const computedStyle = window.getComputedStyle(this.ground);
//     const height = computedStyle.height;
//     const width = computedStyle.width;
//     return [parseFloat(height), parseFloat(width)];
//   }

//   getSurfacesize() {
//     const computedStyle = window.getComputedStyle(this.surface);
//     const height = computedStyle.height;
//     return parseFloat(height);
//   }

//   getBottomsize() {
//     const computedStyle = window.getComputedStyle(this.bottom);
//     const height = computedStyle.height;
//     return parseFloat(height);
//   }

//   generateWorld() {
//     const groundSize = this.getGroundsize();
//     const surfaceSize = this.getSurfacesize();
//     const bottomSize = this.getBottomsize();

//     const surfaceRows = Math.ceil(surfaceSize / 50);
//     const bottomRows = Math.ceil(bottomSize / 50);
//     const cols = Math.ceil(groundSize[1] / 50);

//     this.surface.innerHTML = "";
//     this.bottom.innerHTML = "";

//     for (let i = 0; i < surfaceRows; i++) {
//       const row = this.addRow("above");
//       this.surface.appendChild(row);
//       for (let j = 0; j < cols; j++) {
//         const tile = this.addTile("grass");
//         row.appendChild(tile);
//       }
//     }

//     for (let i = 0; i < bottomRows; i++) {
//       const row = this.addRow("under");
//       this.bottom.appendChild(row);
//       for (let j = 0; j < cols; j++) {
//         const tile = this.addTile("dirt");
//         row.appendChild(tile);
//       }
//     }

//     this.addTree(surfaceRows, cols);
//   }

//   addRow(className) {
//     const row = document.createElement("div");
//     row.classList.add(className);
//     return row;
//   }

//   addTile(type) {
//     const tile = document.createElement("div");
//     tile.classList.add("tile", type);
//     tile.dataset.type = type;
//     tile.addEventListener("click", () => this.removeTile(tile, type));
//     return tile;
//   }

//   addTree(surfaceRows, cols) {
//     const treeBaseRow = surfaceRows - 1;
//     const treeCol = Math.floor(cols / 2);

//     const grassTile = this.addTile("grass");
//     this.surface.children[treeBaseRow].children[treeCol].replaceWith(grassTile);

//     const woodTile1 = this.addTile("wood");
//     const woodTile2 = this.addTile("wood");
//     this.surface.children[treeBaseRow - 1].children[treeCol].replaceWith(
//       woodTile1
//     );
//     this.surface.children[treeBaseRow - 2].children[treeCol].replaceWith(
//       woodTile2
//     );
//   }

//   removeTile(tile, type) {
//     const selectedTool = this.tool.getSelectedTool();
//     if (
//       (selectedTool === "axe" && type === "wood") ||
//       (selectedTool === "pickaxe" && type === "rock") ||
//       (selectedTool === "shovel" && type === "dirt")
//     ) {
//       tile.remove();
//       this.addToInventory(tile);
//     } else {
//       alert(`You need a ${selectedTool} to remove this tile.`);
//     }
//   }

//   addToInventory(tile) {
//     const inventoryBox = document.querySelector(".inventory-box");
//     const newTile = document.createElement("div");
//     newTile.className = tile.className;
//     inventoryBox.appendChild(newTile);
//   }
// }
