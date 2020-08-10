import Person from './person';

export default class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `I am a ${this.constructor.name}. I am at Class ${this.klass}.`;
  }
}
