import Pitch from './index';

describe('Pitch', () => {
  test('it should create instance of Pitch', () => {
    const pitch = new Pitch();

    expect(pitch).toBeInstanceOf(Pitch);
  });
});