import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url, options = { enabled: true }) => {
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
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    }

    if (!options.enabled) return;

    fetchData();
  }, [url, options.enabled]);

  return {
    data,
    isLoading,
    error
  };
};
