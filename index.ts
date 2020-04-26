import { Fibonacci } from './common/math';
import { User } from './model/user';
import { loadUsers } from './data/users';

console.log('Fibonacci of 15 is %s', Fibonacci.calculate(15));

const users: User[] = loadUsers();

console.log('There are %s users defined with %s admin users', users.length, users.filter(p => p.isAdmin == true).length);

users.forEach(p => console.log(p.sayHello()));