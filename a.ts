import { B } from './b';

export class A {
  private foo: string;
  constructor({ overriding = false } = {}) {
    if (overriding) {
      return;
    }
    applyMixins(A, B);
    return new A({ overriding: true });
  }

  doSth() {
    console.log('doSth from A');
  }
}

// from https://www.typescriptlang.org/docs/handbook/mixins.html
function applyMixins(targetCtor: any, sourceCtor: any) {
  Object.getOwnPropertyNames(sourceCtor.prototype).forEach((name) => {
    Object.defineProperty(
      targetCtor.prototype,
      name,
      Object.getOwnPropertyDescriptor(sourceCtor.prototype, name) || Object.create(null)
    );
  });
}
