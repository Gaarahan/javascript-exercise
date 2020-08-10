import Person from './person';

export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    const teachStr = this.klass ? `I teach Class ${this.klass}.` : `I teach No Class.`;
    return `${super.introduce()} I am a ${this.constructor.name}. ${teachStr}`;
  }
}
