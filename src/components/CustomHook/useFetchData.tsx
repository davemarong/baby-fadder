// IMPORT

// Next

// React
import { useState, useEffect } from "react";

// Material UI

// Components

// Utils

// Data
import { defaultValue_Profile } from "../../types/DefaultValues";
// Other
import axios from "axios";

// TYPE/INTERFACE
type Props = {
  url: string;
};
// Functional component
export const useFetchData = ({ url }: Props) => {
  // State
  const [data, setData] = useState<any>(defaultValue_Profile);
  const [loading, setLoading] = useState(true);

  // Functions
  // ASYNC AWAIT
  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data);
      setLoading(false);
    })();
  }, []);

  // Return
  return [data, loading];
};
