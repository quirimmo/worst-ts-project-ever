export class User {
  constructor(public name: string, public surname: string, public isAdmin: boolean = false) {}

  sayHello(): string {
    return 'Hello, my name is ' + this.name + ' ' + this.surname;
  }
}