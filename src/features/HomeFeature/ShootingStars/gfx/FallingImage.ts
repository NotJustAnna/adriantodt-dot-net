import { FallingPixel } from './FallingPixel';

export class FallingImage {
  private imageCanvas: HTMLCanvasElement;
  private imageCtx: CanvasRenderingContext2D;
  queuedPixels: FallingPixel[] = [];

  constructor(
    public x: number,
    public y: number,
    width: number,
    height: number,
    readonly scale: number,
  ) {
    this.imageCanvas = document.createElement('canvas');
    this.imageCanvas.width = width;
    this.imageCanvas.height = height;
    this.imageCtx = this.imageCanvas.getContext('2d')!;
  }

  get width(): number {
    return this.imageCanvas.width;
  }

  get height(): number {
    return this.imageCanvas.height;
  }

  queuePixel(color: string, x: number, y: number) {
    this.queuedPixels.push(new FallingPixel(color, this.scale, { x, y }, this));
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.x = ctx.canvas.width / 2 - (this.width * this.scale) / 2;
    this.y = ctx.canvas.height / 2 - (this.height * this.scale) / 2;
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.imageCanvas, this.x, this.y, this.width * this.scale, this.height * this.scale);
  }

  pixelFinished(color: string, x: number, y: number) {
    this.imageCtx.fillStyle = color;
    this.imageCtx.imageSmoothingEnabled = false;
    this.imageCtx.fillRect(x, y, 1, 1);
  }

  static async fromImageUrl(url: string, screenWidth: number, screenHeight: number) {
    const blob = await fetch(url).then(res => res.blob());
    const img = await createImageBitmap(blob);
    const w = img.width, h = img.height;

    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(img, 0, 0);
    const data = ctx.getImageData(0, 0, w, h).data;

    const scale = Math.ceil(Math.min(screenHeight / h, screenWidth / w));
    console.log(`scale: ${scale}, w: ${w}, h: ${h}`);
    const image = new FallingImage(
      screenWidth / 2 - (w * scale) / 2,
      screenHeight / 2 - (h * scale) / 2,
      w,
      h,
      scale,
    );

    setTimeout(async () => {
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
        if (a === 0 || (r === 0 && g === 0 && b === 0)) {
          continue;
        }
        if ((i % 1024) === 0 && i > 0) {
          await new Promise(resolve => setTimeout(resolve, 0));
        }
        image.queuePixel('#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join(''), (i / 4) % w, Math.floor((i / 4) / w));
      }
    }, 0);
    return image;
  }
}
