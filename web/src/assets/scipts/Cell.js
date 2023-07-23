export class Cell { // 表示一个格子里的一个圆
    constructor(r, c) {
        this.r = r;
        this.c = c;
        this.x = c + 0.5;
        this.y = r + 0.5;
    }
}