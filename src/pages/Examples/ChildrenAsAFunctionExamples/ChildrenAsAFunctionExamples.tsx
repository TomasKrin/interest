import { FC, useState } from "react";

//"Children as a function" yra šablonas React'e, kai komponento children yra funkcija, kuri yra kviečiama su duomenimis arba būsenomis ir grąžina JSX, kuris yra atvaizduojamas komponento.

//"Children as a function" should be used when you need to pass data or state from a parent component to its children in a flexible and customizable way.

//Here are some situations where using "children as a function" can be useful:

//Customization: If you want to allow the parent component to customize the rendering of its children based on some data or state, you can pass the children as a function that takes in the data or state and returns the JSX to be rendered.

//Abstraction: If you have a complex component that encapsulates some logic or behavior, you can pass the children as a function that takes in some data or state and returns a simplified version of the component. This can make the component more reusable and easier to understand.

//HOC Replacement: "Children as a function" can be used as a replacement for Higher Order Components (HOCs) in some cases. Instead of wrapping a component with an HOC to provide some data or state, you can pass the children as a function that takes in the data or state and returns the JSX with the data or state applied.

//Overall, "Children as a function" is a powerful and flexible pattern that can help make your components more reusable and customizable.

interface CounterProps {
  children: (count: number, setCount: (count: number) => void) => JSX.Element;
}

const Counter: React.FC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  return children(count, setCount);
};

const App: FC = () => {
  return (
    <Counter>
      {(count, setCount) => (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      )}
    </Counter>
  );
};
