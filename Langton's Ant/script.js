window.onload = function() {
    canvas = document.getElementById('grid');
    ctx = canvas.getContext('2d');
    const grid = new Grid(canvas.width, canvas.height);
    grid.init();
    setInterval(moveAnt, 7000/130, grid);
  }
  
  const ANTUP = 0;
  const ANTRIGHT = 1;
  const ANTDOWN = 2;
  const ANTLEFT = 3;
  
  class Ant {
    x = 0;
    y = 0;
  
    direction = ANTUP;
  
    moveForward(width, height) {
      switch (this.direction) {
        case ANTUP:
          this.x = ((this.x - 1) + width) % width;
          break;
        case ANTRIGHT:
          this.y = ((this.y + 1) + height) % height;
          break;
        case ANTDOWN:
          this.x = ((this.x + 1) + width) % width;
          break;
        case ANTLEFT:
          this.y = ((this.y - 1) + height) % height;
          break;
      }
    }
  
    rotateRight() {
      this.direction = ((this.direction + 1) + (ANTLEFT + 1)) % (ANTLEFT + 1);
    }
  
    rotateLeft() {
      this.direction = ((this.direction - 1) + (ANTLEFT + 1)) % (ANTLEFT + 1);
    }
  }
  
  class Cell {
    alive = false;
  
    setAlive(alive) {
      this.alive = alive;
    }
  
    get isAlive() {
      return this.alive;
    }
  }
  
  class Grid {
    cells = [];
    ant;
    height = 0;
    width = 0;
    moves = 0;
  
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    init() {
      for (let x = 0; x < this.width; x++) {
        this.cells[x] = [];
        for (let y = 0; y < this.height; y++) {
          const cell = new Cell();
          this.cells[x][y] = cell;
        }
      }
      this.ant = new Ant();
      this.ant.x = this.width / 2;
      this.ant.y = this.height / 2;
    }
  
    move () {
      for (let i = 0; i < 100; i++) {
        let cell = this.cells[this.ant.x][this.ant.y];
        if (cell.isAlive) {
          cell.alive = false;
          ctx.fillStyle = 'white';
          ctx.fillRect(this.ant.x, this.ant.y, 1, 1);
          this.ant.rotateRight();
          this.ant.moveForward(this.width, this.height);
        }
        else {
          cell.alive = true;
          ctx.fillStyle = 'black';
          ctx.fillRect(this.ant.x, this.ant.y, 1, 1);
          this.ant.rotateLeft();
          this.ant.moveForward(this.width, this.height);
        }
        ctx.fillStyle = 'red';
        ctx.fillRect(this.ant.x, this.ant.y, 1, 1);
        this.moves++;
      }
    }
  }
  
  function moveAnt(grid) {
    grid.move();
    ctx.stroke();
    var moves = document.getElementById('moves');
    moves.innerHTML = grid.moves;
  }