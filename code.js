export class Code {
  constructor(stageHeight, startX, startY, words) {
    this.x = startX;
    this.maxY = stageHeight;
    this.speed = 20;
    this.count = 0;

    this.words = words;
    this.len = this.words.length;
    this.y = [];
    for (let i = 0; i < this.len; i++) {
      this.y[i] = startY;
    }
  }
  draw(ctx) {
    this.count += 1;

    ctx.fillStyle = '#48DA72';
    ctx.font = 'italic bold 25px Arial, sans-serif';
    ctx.shadowColor = 'green';
    ctx.shadowBlur = 70;
    for (let i = 0; i < this.count; i++) {
      if (this.y[i] < this.maxY) {
        this.y[i] += this.speed;
        if (Math.random() > 0.4) {
          const randomIndex = Math.floor(Math.random() * this.len);
          ctx.strokeText(this.words[randomIndex], this.x, this.y[i]);
          ctx.fillText(this.words[randomIndex], this.x, this.y[i]);
        }
      }
    }
  }
}
