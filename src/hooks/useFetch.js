import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, { enabled = true, shouldCache = false } = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setError(null);
        setIsLoading(true);
        const result = await axios.get(url, {
          signal: controller.signal
        });

        setData(result.data);
        setIsLoading(false);
        setError(null);

        if (shouldCache) {
          sessionStorage.setItem(url, JSON.stringify(result.data));
        }
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    }

    if (!enabled) return;

    if (shouldCache) {
      const cachedData = sessionStorage.getItem(url);

      if (cachedData) {
        setData(JSON.parse(cachedData));
        setIsLoading(false);
        return;
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, enabled, shouldCache]);

  return {
    data,
    isLoading,
    error
  };
};
