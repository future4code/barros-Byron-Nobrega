import { useEffect, useState } from "react";
import axios from "axios";

const useGetDetailsRequesData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const [erro, setErro] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url,{
        headers:{
          auth:localStorage.getItem("token")
        }
      })
      .then((response) => {
        setIsLoading(false);
        setData(response.data.trip);
        console.log(response.data.trip);
      })
      .catch((error) => {
        setIsLoading(false);
        setErro(error.response.data);
      });
  }, [url]);

  return [data, isLoading, erro];
};

export default useGetDetailsRequesData;