import { CapitalizePipe } from './capitalize.pipe';

fdescribe('CapitalizePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizePipe();
    expect(pipe).toBeTruthy();
  });
  it('check if first letter is capitalize', () => {
    const initialText = 'hola';
    const withCapitalize = new CapitalizePipe().transform(initialText);
    expect(withCapitalize).toEqual('Hola');
  });
});
