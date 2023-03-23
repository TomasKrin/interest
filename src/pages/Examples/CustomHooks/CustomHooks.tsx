//visi hooksai prasideda nuo zodzio 'use'

import { TextField } from "@mui/material";
import useDebounce from "../../../hooks/useDebounce";
import usePreviousValue from "../../../hooks/usePreviousValue";
import { useState } from "react";

const Examples = () => {
  const [name, setName] = useState("");
  const debouncedName = useDebounce(name, 2000);
  const previousValue = usePreviousValue(name);

  return (
    <div>
      <TextField value={name} onChange={(e) => setName(e.target.value)} />
      <p>Mano vardas: {name}</p>
      <p>Mano vardas su debounce: {debouncedName}</p>
      <p>Mano praeitas vardas: {previousValue}</p>
    </div>
  );
};

export default Examples;
