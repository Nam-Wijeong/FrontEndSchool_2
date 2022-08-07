class Tile {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.posX = this.col * tileSize;
        this.posY = this.row * tileSize;

    }
    renderTile(bg = "green") {
        ctx.fillStyle = bh;
        ctx.fillRect(this.posX, this.posY, tileSize, tileSize)
    }
    renderImg(bg= './pizza.png'){
        // img 요소를 만들어야합니다.
        const image = new Image(tileSize, tileSize);
        image.src = bg;
        // drawImage : 이미지를 그려줍니다. 그려줄 이미지요소, x,y 가로 사이즈, 세로 사이즈 전달
        ctx.drawImage(image, this.posX, this.posY, tileSize, tileSize)
    }
}