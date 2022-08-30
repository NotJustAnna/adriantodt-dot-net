/**
 * Renderable falling dot.
 */
import { FallingDotImageGenerator } from './FallingDotImageGenerator';

export abstract class FallingDot {
  bitmap?: ImageBitmap;

  protected constructor(
    readonly color: string,
    readonly size: number,
    readonly speed: number,
  ) {
    FallingDot.generator.generate(color, size, speed).then(bitmap => {
      this.bitmap = bitmap;
    })
  }

  get ready(): boolean {
    return this.bitmap !== undefined;
  }

  abstract render(ctx: CanvasRenderingContext2D, delta: number): boolean;

  private static generator = new FallingDotImageGenerator();
}
