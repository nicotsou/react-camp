import { useEffect, useState } from 'react';

const usePopularApi = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [popularShows, setPopularShows] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams({
      api_key: process.env.REACT_APP_API_KEY,
      language: 'en-US',
      page: 1,
    });

    fetch(`https://api.themoviedb.org/3/tv/popular?${params}`)
      .then((result) => result.json())
      .then(
        (result) => {
          setPopularShows(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  return {
    isLoaded,
    error,
    popularShows,
  };
};

export default usePopularApi;
