import { useState, useEffect } from 'react';

export function useGetData<T>(uri: string, dataKey: string): T | null {
  const [data, setData] = useState<{ [key: string]: T | null }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(uri);
        if (res.ok) {
          const resj = await res.json();
          setData((prevData) => ({
            ...prevData,
            [dataKey]: resj,
          }));
        } else {
          throw new Error("Hubo un error al obtener los datos");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [uri, dataKey]);

  return data[dataKey] || null;
}
