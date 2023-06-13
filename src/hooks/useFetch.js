import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setIsLoading(true);
        const result = await axios.get(url);

        await delay(2000);

        setData(result.data);
        setIsLoading(false);
      } catch (e) {
        setError(e);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error
  };
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));