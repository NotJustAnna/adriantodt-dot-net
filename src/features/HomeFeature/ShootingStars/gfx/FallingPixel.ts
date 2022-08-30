import { FallingDot } from './FallingDot';
import { FallingImage } from './FallingImage';

export class FallingPixel extends FallingDot {
  constructor(
    color: string,
    size: number,
    readonly target: { x: number, y: number },
    readonly image: FallingImage,
  ) {
    super(color, size, size);
  }

  lifetime = Math.floor(Math.random() * 70 + 10);

  render(ctx: CanvasRenderingContext2D, delta: number) {
    if (!this.ready) {
      return true;
    }
    const off = this.bitmap!.width - this.size;
    if (this.lifetime <= 0) {
      ctx.drawImage(this.bitmap!, this.image.x + this.target.x * this.size - off, this.image.y + this.target.y * this.size - off);
      this.image.pixelFinished(this.color, this.target.x, this.target.y);
      return false;
    }
    ctx.drawImage(this.bitmap!, this.image.x + (this.target.x - this.lifetime) * this.size - off, this.image.y + (this.target.y - this.lifetime) * this.size - off);
    this.lifetime -= delta;
    return true;
  }
}
