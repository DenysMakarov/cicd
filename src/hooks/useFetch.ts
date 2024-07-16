/* eslint-disable */
import { useEffect, useState } from 'react';

interface IProps {
  uri: string;
}

const UseFetch = ({ uri }: IProps) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(uri);
        const json = await res.json();
        setPosts(json);
      } catch (error: unknown) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [uri]);

  return { posts, loading, error };
};
export default UseFetch;
