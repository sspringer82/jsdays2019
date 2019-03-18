import { Greetable } from './greetable';

export class User implements Greetable {
  constructor(private firstname: string, private lastname: string) {}

  public getFullName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
