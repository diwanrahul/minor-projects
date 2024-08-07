import { useEffect, useState } from "react";

export default function useFetch({ url, options }) {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, options) => {
    setPending(true);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const result = await response.json();
        setData(result);
        setError(null);
      } else {
        throw new Error("R is not JSON");
      }
    } catch (e) {
      setError(`${e.message}Error Occurred`);
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchData(url, options);
  }, [url, options]);

  return { data, error, pending };
}
