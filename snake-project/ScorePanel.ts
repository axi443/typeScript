class ScorePanel {
  score = 0;
  level = 1;
  scoreEl: HTMLElement;
  levelEl: HTMLElement;
  maxLevel: number;
  upScore: number;
  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEl = document.getElementById("score")!;
    this.levelEl = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }
  setScore() {
    this.scoreEl.innerHTML = ++this.score + '';
    if (this.score % this.upScore === 0) {
        this.setLevel();
    }
  }
  setLevel() {
    if (this.level < this.maxLevel) {
      this.levelEl.innerHTML = ++this.level + '';
    }
  }
}

export default ScorePanel;
