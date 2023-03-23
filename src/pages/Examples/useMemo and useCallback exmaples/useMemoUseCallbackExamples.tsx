import { useCallback, useMemo, useState } from "react";

import { Button } from "@mui/material";

// array with 100 objects
const array = [
  {
    value: 10,
  },
  {
    value: 10,
  },
  {
    value: 10,
  },
  {
    value: 10,
  },
  {
    value: 10,
  },
  {
    value: 10,
  },
  {
    value: 10,
  },
  {
    value: 10,
  },
];

const useMemoUseCallbackExamples = () => {
  const [clicked, setClicked] = useState(false);
  //naudoti useMemo yra geriausia, jeigu yra performance issues, bet tik dirbant su dideliais array's, componentais ir t.t.

  //100 objektu su usememo - 500ms
  //100 objektu be usememo - 750ms-1s

  //10 objektu su usememo - 350ms
  //10 objektu be usememo - 100ms

  //The fundamental idea with useMemo is that it allows us to “remember” a computed value between renders.

  // useMemo naudojamas pagrinde su array/objects ir kartais components

  const a = useMemo(() => {
    return array.reduce((prev, curr) => curr.value + prev, 0);
  }, []);

  //useCallback naudojamas su funkcijomis, yra beveik tas pats kaip ir useMemo

  //tiek useMemo tiek useCallback nesirerenderina jeigu nera nieko dependency array arba jeigu niekas ten nesikeicia

  const b = useCallback(() => {}, []);

  // kokius hooksus mokam: useState, useEffect, useRef, useContext, useMemo, useCallback

  const sum = array.reduce((prev, curr) => curr.value + prev, 0);
  console.log(sum);
  return (
    <>
      <Button onClick={() => setClicked(true)}>Click me</Button>
      {sum}
    </>
  );
};

export default useMemoUseCallbackExamples;
