import { FallingDot } from './FallingDot';
import { FallingImage } from './FallingImage';

export class FallingPixel extends FallingDot {
  constructor(
    color: string,
    size: number,
    readonly target: { x: number, y: number },
    readonly image: FallingImage,
    speed?: number,
  ) {
    super(color, size, speed ?? Math.floor(Math.random() * 5 + 5));
  }

  lifetime = Math.floor(Math.random() * 10 + 80);

  render(ctx: CanvasRenderingContext2D, delta: number) {
    if (!this.ready) {
      return true;
    }
    const off = this.bitmap!.width - this.size;
    if (this.lifetime <= 0) {
      ctx.drawImage(
        this.bitmap!,
        Math.round(this.image.x + this.target.x * this.size - off),
        Math.round(this.image.y + this.target.y * this.size - off),
      );
      this.image.pixelFinished(this.color, this.target.x, this.target.y);
      return false;
    }
    ctx.drawImage(
      this.bitmap!,
      Math.round(this.image.x + (this.target.x - this.lifetime) * this.size - off),
      Math.round(this.image.y + (this.target.y - this.lifetime) * this.size - off),
    );
    this.lifetime -= delta;
    return true;
  }
}
