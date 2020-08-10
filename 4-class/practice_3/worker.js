import Person from './person';

export default class Worker extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    return `I am a ${this.constructor.name}. I have a job.`;
  }
}
