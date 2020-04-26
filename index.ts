import { Fibonacci } from './common/math';
import { User } from './model/user';
import * as userData from './data/users.json';

console.log('Fibonacci of 15 is %s', Fibonacci.calculate(15));

const users: User[] = userData as User[];

console.log('There are %s users defined with %s admin users', users.length, users.filter(p => p.isAdmin == true).length);
