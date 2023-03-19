import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {
  constructor() {}
  Employees() {
    return [
      {
        id: 101,
        firstname: 'Freddie',
        lastname: '	Baker',
        email: 'fbaker@gmail.com',
      },
      {
        id: 102,
        firstname: 'Donna',
        lastname: 'Autumn',
        email: 'dautumn@yahoo.com',
      },
      {
        id: 103,
        firstname: 'Johnny',
        lastname: 'Bravo',
        email: 'jbravo@gmail.com',
      },
      {
        id: 104,
        firstname: 'Kisses Shannen',
        lastname: 'Reyes',
        email: 'kisses.reyes010@gmail.com',
      },
    ];
  }
}
