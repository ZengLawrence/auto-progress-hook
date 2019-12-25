import { useAutoProgressEffect } from '.';

test('initialize hook', () => {
    const [value, setStart] = useAutoProgressEffect(false);
    expect(value).toBe(0);
    expect(setStart).toBeDefined();
  });