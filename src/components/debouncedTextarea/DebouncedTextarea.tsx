/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, SyntheticEvent, useState, useEffect } from "react";

interface IDebouncedTextareaProps {
  value: string;
  itemIndex: string;
  onChangeHandle(value: string, code: string): void;
}

const DebouncedTextarea: FC<IDebouncedTextareaProps> = ({
  value,
  itemIndex,
  onChangeHandle
}) => {
  const [textareaValue, setTextareaValue] = useState(value || "");
  const [timer, setTimer] = useState<any>(null);
  const [status, setStatus] = useState<boolean>(false);

  const onValueChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    setStatus(true);
    console.log("value:", event.currentTarget.value);
    const currentValue = event.currentTarget.value;
    setTextareaValue(currentValue);
  };

  // pass value to external component
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    if (status) {
      setTimer(
        setTimeout(() => {
          console.log("final:", textareaValue, itemIndex);
          onChangeHandle(textareaValue, itemIndex);
        }, 500)
      );
    }
  }, [textareaValue]);

  return <textarea value={textareaValue} onChange={onValueChange} />;
};

export default DebouncedTextarea;
