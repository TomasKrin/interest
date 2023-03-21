import { useRef } from "react";

const UseRefExamples = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  //renderinamas inputas ir buttonas
  //ref={inputRef} duoda reiksme kaip inputas
  // handleClick inicijuoja inputo veiksma

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
};
export default UseRefExamples;
