import { useEffect } from "react";
import { useState } from "react";

function UseFetch(url) {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset before fetch
    setloading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Something went wrong!");
        return res.json();
      })
      .then((data) => {
        setdata(data);
        setloading(false);
      })
      .catch((err) => {
        setError(err.message);
        setloading(false);
      });
  }, [url]); // runs every time the url changes
  return { data, loading, error };
}

export default UseFetch;
