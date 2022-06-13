import { B } from './b';

export class A {
  constructor() {
    return new B();
  }

  doSth() {
    console.log('doSth from A');
  }
}
