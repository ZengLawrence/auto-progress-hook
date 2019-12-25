import { renderHook, act } from '@testing-library/react-hooks'
import { useAutoProgressEffect } from '.';

test('initialize hook returns [number, function]', () => {
  const { result } = renderHook(() => useAutoProgressEffect(false)) ;

  // return [number, function]
  expect(result.current.length).toBe(2);

  expect(result.current[0]).toBe(0);
  expect(result.current[1]).toBeDefined();
});

test('set start to true to false should return change value to 100', () => {
  const { result } = renderHook(() => useAutoProgressEffect(true)) ;

  // return [number, function]
  expect(result.current.length).toBe(2);

  expect(result.current[0]).toBe(0);
  expect(result.current[1]).toBeDefined();

  act(() => {
    const setStart = result.current[1];
    setStart(false);
  })
  expect(result.current[0]).toBe(100);
});