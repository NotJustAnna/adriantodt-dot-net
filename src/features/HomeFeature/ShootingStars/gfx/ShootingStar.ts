import { FallingDot } from './FallingDot';

export class ShootingStar extends FallingDot {
  private r = (Math.random() - 0.25) * 1.25;

  constructor(
    color: string,
    size: number,
    speed: number,
    readonly entropy: number,
  ) {
    super(color, size, speed);
  }

  lifetime = 0;

  render(ctx: CanvasRenderingContext2D, delta: number): boolean {
    if (!this.ready) {
      return true;
    }
    const canvas = ctx.canvas,
      h = canvas.height,
      w = canvas.width,
      hw = h + w,
      e = Math.floor(hw * this.r),
      n = this.lifetime * this.speed;

    let spawnX, spawnY;
    if (e < h) {
      spawnX = 0;
      spawnY = h - e;
    } else {
      spawnX = e - h;
      spawnY = 0;
    }

    const x = spawnX + n, y = spawnY + n;

    if (x > w + this.size || y > h + this.size) {
      return false;
    }

    ctx.drawImage(this.bitmap!, x, y);
    this.lifetime += delta;
    return true;
  }

  static ofColor(color: string) {
    const rgb = color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)!;
    const r = parseInt(rgb[1], 16), g = parseInt(rgb[2], 16), b = parseInt(rgb[3], 16);

    const entropy = r + g + b;
    const size = Math.floor((b + g) / 128 + 1);
    const speed = Math.floor((r * 4 + g * 2 + b) / 256 + 1);
    return new ShootingStar(color, size, speed, entropy);
  }
}
