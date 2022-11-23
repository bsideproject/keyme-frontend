import React, { useCallback, useState } from "react";

const useInput = (defaultValue: string) => {
  const [input, setInput] = useState(defaultValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInput(e.target.value);
    },
    [input]
  );

  const onReset = useCallback(() => {
    setInput("");
  }, []);

  return [input, onChange, onReset, setInput] as [
    string,
    typeof onChange,
    typeof onReset,
    typeof setInput
  ];
};

export default useInput;
