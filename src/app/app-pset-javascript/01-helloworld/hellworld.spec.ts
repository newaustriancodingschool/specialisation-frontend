import {helloWorld} from './helloworld';

describe('01 - Hello World', () => {
  it('should ensure basic assertions work', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
    expect('foo').toEqual('foo');
  });
  it('should return hello world', () => {
    expect(helloWorld()).toEqual('Hello World');
  });
});
