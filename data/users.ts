import { User } from '../model/user';

export function loadUsers(): User[] {
  return [new User('John', 'Doe'), new User('Lukasz', 'Grden', true)];
}