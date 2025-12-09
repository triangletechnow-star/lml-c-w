import { useEffect, useState } from "react";
import { apiGet } from "../api/apiClient";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiGet(url)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}
