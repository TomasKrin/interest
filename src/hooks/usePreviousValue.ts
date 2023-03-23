import { useEffect, useRef } from "react";

const usePreviousValue = (value: any) => {
  const prevValueRef = useRef<any>();

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return prevValueRef.current;
};

export default usePreviousValue;
