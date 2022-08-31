export function singleUse<T extends (...args: any[]) => void>(fn: T): T {
  let used = false;
  return ((...args: any[]) => {
    if (used) {
      return;
    }
    used = true;
    return fn(...args);
  }) as T;
}
