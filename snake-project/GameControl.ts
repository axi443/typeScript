import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;
  direction: string = "Right";
  isLive = true;
  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }
  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
  }
  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;
    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }
    this.checkEat(X, Y);
    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e: any) {
      // 进入到catch, 说明出现了异常，游戏结束，弹出一个提示信息
      alert(e.message + "GAME OVER!");
      // 将isLive设置为false
      this.isLive = false;
    }
    // this.isLive &&
    //   setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    // clearTimeout();
    this.isLive &&
      setTimeout(() => {
        this.run();
      }, 300 - (this.scorePanel.level - 1) * 30);
  }
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      this.food.change();
      this.scorePanel.setScore();
      this.snake.addBody();
    }
  }
}
export default GameControl;
