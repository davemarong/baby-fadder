import { useState, useEffect } from "react";

type Props = {
  setState: (value: string) => void;
  stri: string;
};
const useSomeCustomHook = ({ setState, stri }: Props) => {
  useEffect(() => {
    setState("stri");
  }, []);
};

const SomePage = () => {
  const [state, setState] = useState("initial value");

  useSomeCustomHook({ setState: setState, stri: "hei" });
};
export default SomePage;

const someFunction = (setState: (value: string) => void) => {
  setState("updated value");
};
