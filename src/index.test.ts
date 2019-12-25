import { useAutoProgressEffect } from '.';

test('initialize hook', () => {
    const [value, setStart] = useAutoProgressEffect(true);
    expect(value).toBe(0);
    expect(setStart).toBeDefined;
  });