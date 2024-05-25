class World {
  constructor() {
    this.ground = document.getElementById("ground");
    this.surface = document.getElementById("above");
    this.bottom = document.getElementById("under");
  }
  getGroundsize() {
    const computedStyle = window.getComputedStyle(this.ground);
    const height = computedStyle.height;
    const width = computedStyle.width;
    return [parseFloat(height), parseFloat(width)];
  }
  getSurfacesize() {
    const computedStyle = window.getComputedStyle(this.surface);
    const height = computedStyle.height;
    return parseFloat(height);
  }
  getBottomsize() {
    const computedStyle = window.getComputedStyle(this.bottom);
    const height = computedStyle.height;
    return parseFloat(height);
  }
  generateWorld() {
    const groundSize = this.getGroundsize();
    const surfaceSize = this.getSurfacesize();
    const bottomSize = this.getBottomsize();
    const surfaceRows = Math.ceil(surfaceSize / 50);
    const bottomRows = Math.ceil(bottomSize / 50);
    const cols = Math.ceil(groundSize[1] / 50);

    for (let i = 0; i < surfaceRows; i++) {
      const row = this.addRow('above');
      for (let j = 0; j < cols; j++) {

          row.appendChild(this.addTile('above'));
        }
        this.surface.appendChild(row);
    }
    for (let i = 0; i < bottomRows; i++) {
      const row = this.addRow('under');
      for (let j = 0; j < cols; j++) {
          row.appendChild(this.addTile('under'));
        }
        this.bottom.appendChild(row);
    }
  }

  addRow(section) {
    const row = document.createElement("div");
    row.classList.add("row", section);
    return row;
  }

  addTile(section) {
    const tile = document.createElement("div");
    tile.classList.add("tile", section);
   tile.addEventListener("click", this.removeTile.bind(this, tile));
   return tile;
  }
  removeTile() {
tile.parentNode.removechild(tile)
  }
}
