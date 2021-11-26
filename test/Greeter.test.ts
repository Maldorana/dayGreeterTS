import { greeting } from '../src/Greeter';

describe('Greeter tests', () => {
  it('should greet the morning when it is the morning', () => {
    Date.prototype.getHours = jest.fn().mockReturnValue(8);
    expect(greeting()).toBe('Good morning!');
  });
  it('should greet the afternoon when it is the afternoon', () => {
    Date.prototype.getHours = jest.fn().mockReturnValue(14);
    expect(greeting()).toBe('Good afternoon!');
  });
});
