import { useEffect, useState } from "react";
import axios from "axios";

const useGetRequesData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const [erro, setErro] = useState(undefined);
  const [reload, setReload] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data.trips);
      })
      .catch((error) => {
        setIsLoading(false);
        setErro(error.response.data);
      });
  }, [url,reload]);

  return [data, isLoading, erro, reload, setReload];
};

export default useGetRequesData;