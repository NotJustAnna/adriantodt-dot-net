export class StaticImage {
  constructor(
    public image: ImageBitmap,
    public x: number,
    public y: number,
    readonly scale: number,
  ) {
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(this.image, this.x, this.y, this.image.width * this.scale, this.image.height * this.scale);
  }

  static async fromImageUrl(url: string, scale: number) {
    const blob = await fetch(url).then(res => res.blob());
    const img = await createImageBitmap(blob);
    return new StaticImage(
      img,
      0,
      0,
      scale,
    );
  }
}
