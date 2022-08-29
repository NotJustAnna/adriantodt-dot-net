import { FallingDot } from './FallingDot';

export class FallingPixel extends FallingDot {
  constructor(
    color: string,
    size: number,
    readonly target: { x: number, y: number },
    speed?: number,
  ) {
    super(color, size, speed ?? Math.floor(Math.random() * 10 + 10));
  }

  lifetime = Math.floor(Math.random() * 70 + 10);

  render(ctx: CanvasRenderingContext2D, delta: number) {
    if (!this.ready) {
      return true;
    }
    if (this.lifetime <= 0) {
      return false;
    }
    ctx.drawImage(this.bitmap!, this.target.x - this.lifetime, this.target.y - this.lifetime);
    this.lifetime -= delta;
    return true;
  }
}
