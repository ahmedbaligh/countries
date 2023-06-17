import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, { enabled = true, shouldCache = false } = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setIsLoading(true);
        const result = await axios.get(url);

        setData(result.data);
        setIsLoading(false);

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
  }, [url, enabled, shouldCache]);

  return {
    data,
    isLoading,
    error
  };
};
