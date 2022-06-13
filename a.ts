import { B } from './b';

export class A {
  constructor() {
    return new B(); // the new constructed B instance will be `this`
  }

  doSth() {
    console.log('doSth from A');
  }
}
