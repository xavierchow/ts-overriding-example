import { B } from './b';

export class A {
  private foo: string;
  constructor() {
    return new B();
  }

  doSth() {
    console.log('doSth from A');
  }
}
