import { ShootingStarsRenderer } from './ShootingStarsRenderer';
import { ShootingStar } from './ShootingStar';
import { FallingImage } from './FallingImage';

export class ShootingStarsScene {
  private readonly renderer = new ShootingStarsRenderer();
  private lastRenderTime: number = 0;
  private deltaAcc: number = 0;
  private image?: FallingImage;
  imageUrl?: string;

  constructor(imageUrl?: string) {
    this.imageUrl = imageUrl;
  }

  loop(ctx: CanvasRenderingContext2D) {
    const now = performance ? performance.now() : Date.now();
    const delta = this.lastRenderTime === 0 ? 1 : (now - this.lastRenderTime) / 20;
    this.lastRenderTime = now;
    this.deltaAcc += delta;
    // console.log(this.deltaAcc);
    if (this.deltaAcc > 5) {
      this.deltaAcc -= 5;
      this.renderer.objs.push(ShootingStar.ofColor(ShootingStarsScene.randomColor()));
    }
    if (this.image) {
      if (this.image.queuedPixels.length > 0) {
        this.renderer.objs.push(this.image.queuedPixels.shift()!);
      }
    } else if (this.imageUrl) {
      FallingImage.fromImageUrl(this.imageUrl, ctx.canvas.width, ctx.canvas.height).then(image => {
        this.image = image;
      });
      this.imageUrl = undefined;
    }
    this.renderer.draw(ctx, delta);
    if (this.image) {
      this.image.draw(ctx);
    }
  }

  private static randomColor() {
    return ShootingStarsScene.hslToRgb(Math.random(), Math.random(), Math.random());
  }

  /**
   * Converts an HSL color value to RGB. Conversion formula
   * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
   * Assumes h, s, and l are contained in the set [0, 1] and
   * returns r, g, and b in the set [0, 255].
   *
   * @param   {number}  h       The hue
   * @param   {number}  s       The saturation
   * @param   {number}  l       The lightness
   * @return  {Array}           The RGB representation
   */
  private static hslToRgb(h: number, s: number, l: number) {
    let r, g, b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return '#' + [r, g, b].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
  }
}
