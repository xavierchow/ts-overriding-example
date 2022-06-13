import { B } from './b';

export class A {
  private foo: string;
  constructor() {}

  doSth() {
    console.log('doSth from A');
  }

  static create() {
    // return new A();
    return new B();
  }
}
