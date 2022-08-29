/**
 * Renderable falling dot.
 */
import { ObjectCache } from './ObjectCache';

export abstract class FallingDot {
  bitmap?: ImageBitmap;

  protected constructor(
    readonly color: string,
    readonly size: number,
    readonly speed: number,
  ) {
    FallingDot.generate(color, size, speed).then(bitmap => {
      this.bitmap = bitmap;
    })
  }

  get ready(): boolean {
    return this.bitmap !== undefined;
  }

  abstract render(ctx: CanvasRenderingContext2D, delta: number): boolean;

  private static async generate(color: string, size: number, speed: number) {
    const key = `${color}-${size}-${speed}`;
    if (this.cache.has(key)) {
      return this.cache.get(key)!;
    }

    const canvas = document.createElement('canvas');
    let max = speed * size + 1;
    canvas.width = max;
    canvas.height = max;
    const ctx = canvas.getContext('2d')!;

    for (let i = 0; i < size * 2; i++) {
      ctx.fillStyle = color;
      const at = max - speed * i, sz = speed - Math.floor(i / 2);
      if (sz <= 0) {
        break;
      }
      ctx.fillRect(at, at, sz, sz);
      color = this.darkerShade(color);
    }

    return new Promise<ImageBitmap>((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          reject(new Error('Failed to generate blob'));
          return;
        }
        resolve(
          createImageBitmap(blob).then(bitmap => {
            this.cache.set(key, bitmap);
            return bitmap;
          })
        );
      });
    });
  }

  private static darkerShade(color: string) {
    const rgb = color.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)!;
    const r = Math.floor(parseInt(rgb[1], 16) * 0.7);
    const g = Math.floor(parseInt(rgb[2], 16) * 0.7);
    const b = Math.floor(parseInt(rgb[3], 16) * 0.7);
    return '#' + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, '0')).join('');
  }

  private static cache = new ObjectCache<ImageBitmap>(2000);
}
