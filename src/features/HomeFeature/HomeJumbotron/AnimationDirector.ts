export class AnimationDirector {
  private lastAnimation = Promise.resolve();
  public whenAvailable(callback: () => void | Promise<void>): this {
    this.lastAnimation = this.lastAnimation.then(() => callback());
    return this;
  }

  public delaying(delay: number): this {
    this.lastAnimation = this.lastAnimation.then(() => new Promise(resolve => setTimeout(resolve, delay)));
    return this;
  }
}
