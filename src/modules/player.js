// class Player {
//   constructor() {
//     this.inventory = {};
//     this.inventoryBox = document.querySelector(".inventory-box");
//   }

//   addItem(item) {
//     if (this.inventory[item]) {
//       this.inventory[item]++;
//     } else {
//       this.inventory[item] = 1;
//     }
//     this.updateInventoryDisplay();
//   }

//   updateInventoryDisplay() {
//     this.inventoryBox.innerHTML = "";
//     Object.keys(this.inventory).forEach((item) => {
//       const itemDiv = document.createElement("div");
//       itemDiv.classList.add("inventory-item");
//       itemDiv.textContent = `${item}: ${this.inventory[item]}`;
//       this.inventoryBox.appendChild(itemDiv);
//     });
//   }
// }
