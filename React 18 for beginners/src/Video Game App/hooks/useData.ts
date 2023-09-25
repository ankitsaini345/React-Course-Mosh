import { CanceledError, AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Genre } from "./useGenres";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.results);
        })
        .catch((err) => {
          setLoading(false);
          if (err instanceof CanceledError) return;
          setError(err.message);
        });
    },
    deps ? deps : []
  );

  return { data, error, isLoading };
};

export default useData;
