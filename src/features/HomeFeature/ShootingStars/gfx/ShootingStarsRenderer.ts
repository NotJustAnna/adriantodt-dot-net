import { FallingDot } from './FallingDot';

export class ShootingStarsRenderer {
    private bufferCanvas: HTMLCanvasElement;
    private bufferCtx: CanvasRenderingContext2D;
    objs: FallingDot[] = [];

    constructor() {
        this.bufferCanvas = document.createElement('canvas');
        this.bufferCtx = this.bufferCanvas.getContext('2d')!;
    }

    draw(ctx: CanvasRenderingContext2D, delta: number) {
        ctx.imageSmoothingEnabled = false;
        //this.bufferCanvas.width = ctx.canvas.width;
        //this.bufferCanvas.height = ctx.canvas.height;

        //const bufferCtx = this.bufferCtx;
        //bufferCtx.clearRect(0, 0, this.bufferCanvas.width, this.bufferCanvas.height);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        this.objs = this.objs.filter(r => r.render(ctx, delta));

        //ctx.drawImage(this.bufferCanvas, 0, 0);
    }
}
