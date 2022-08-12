import { useEffect, useState } from "react";
import axios from "axios";

const usePostRequesData = (url,body) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const [erro, setErro] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(url,body)
      .then((response) => {
        setIsLoading(false);
        alert("Cadastrado com sucesso.")
      })
      .catch((error) => {
        setIsLoading(false);
        setErro(error.response.data);
      });
  }, [url]);

  return [data, isLoading, erro];
};

export default usePostRequesData;