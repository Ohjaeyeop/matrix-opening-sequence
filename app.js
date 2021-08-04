import { Code } from './code.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    const words =
      '独ゃゅノハフこちヱアセシ仕ごにふ8負王ミレ大査ッラね変8エホカ33無24引ちはト288ぽ島主ロミナ秋電7値そ。4確ぼ馬司コヱ問日づクフま引憶相ワヘフエ点81周あべシューリンガンのグーリンダイ。グーリンダイのポンポコピーのポンポコナーの。シューリンガンのタセムリ0赤のひ001。応らたーの想65上文長ソエフヨぽ庁モエリサ本多レえと';

    this.code = [];
    this.n = 0;
    let startX = 100;
    while (true) {
      const createCode = new Code(this.stageHeight, startX, 70, words);
      this.code[this.n] = createCode;
      this.n += 1;
      startX += Math.floor(Math.random() * 80 + 10);
      console.log(startX);
      if (startX > this.stageWidth - 100) {
        break;
      }
    }

    window.setInterval(this.animate.bind(this), 50);
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate() {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    for (let i = 0; i < this.n; i++) {
      this.code[i].draw(this.ctx);
    }
  }
}

window.onload = () => {
  new App();
};
