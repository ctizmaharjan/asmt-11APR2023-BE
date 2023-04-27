import {useEffect, useState} from 'react';

type UseLocalStorageResult<T> = [T | any, (value: T) => void];

function useLocalStorage<T>(
  key: string,
  initialValue?: T
): UseLocalStorageResult<T> {
  const [storedValue, setStoredValue] = useState<T | any>(() => {
    const item = window?.localStorage?.getItem(key);
    return !!item ? JSON.parse(item ?? '') : initialValue ?? '';
  });

  useEffect(() => {
    !!initialValue &&
      window.localStorage.setItem(key, JSON.stringify(initialValue));
  }, [key, initialValue, storedValue]);

  const setValue = (value: T) => {
    setStoredValue(value);
    !!value && window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
