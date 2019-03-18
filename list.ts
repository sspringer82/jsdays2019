export class List<T> {
  private items: T[] = [];

  add(i: T) {
    this.items.push(i);
  }

  get(): T[] {
    return this.items;
  }
}
