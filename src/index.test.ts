import { renderHook, act, HookResult } from '@testing-library/react-hooks'
import { useAutoProgressEffect } from '.';

test('initialize hook returns [number, function]', () => {
  const { result } = renderHook(() => useAutoProgressEffect(false));

  // return [number, function]
  expect(result.current.length).toBe(2);

  const [value, setStart] = result.current;
  expect(value).toBe(0);
  expect(setStart).toBeDefined();
});

test('set start to true to false should return change value to 100', () => {
  const { result } = renderHook(() => useAutoProgressEffect(true));

  {
    const [value, setStart] = result.current;
    expect(value).toBe(0);
    expect(setStart).toBeDefined();
  }

  act(() => {
    const setStart = result.current[1];
    setStart(false);
  })
  {
    const [value] = result.current;
    expect(value).toBe(100);
  }
});