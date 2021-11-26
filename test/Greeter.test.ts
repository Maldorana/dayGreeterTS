import { greeting } from '../src/Greeter';

describe('Greeter tests', () => {
  it('should greet the morning when it is the morning', () => {
    expect(greeting()).toBe('Good morning!');
  });
});
