import { Fibonacci } from './math/fibonacci';
import { User } from './model/user';

console.log(Fibonacci.calculate(15));

const me = new User('Lukasz', 'Master', 38);

console.log(me);

interface A{}

class Teacher extends User implements A {
  teach(): void {
    console.log('Welcome to class! My name is ' + this.name);
  }
}

const teacher = new Teacher('remo', 'jansen', 22);
teacher.teach();

console.log(teacher instanceof User);