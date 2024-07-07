import { useEffect, useState } from 'react';

export type ErrorState = string | null;

export const useError = (initialError: ErrorState) => {
  const [error, setError] = useState<ErrorState>(initialError);

  useEffect(() => {
    if (!error) {
      return;
    }

    const timerId = setTimeout(() => {
      setError('');
    }, 8000);

    return () => {
      clearTimeout(timerId);
    };
  }, [error]);

  return [error, setError] as const;
};
