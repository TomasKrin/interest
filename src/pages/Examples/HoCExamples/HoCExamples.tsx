// Examples:

//Authentication HOC - A TypeScript HOC that takes a component and returns a new component that requires the user to be authenticated in order to access its contents.

//Logging HOC - a component that logs information about the rendered component.

//Throttling HOC - a component that limits the rate at which a component can update.

import { ComponentType, FC, useEffect } from "react";

import throttle from "lodash/throttle";

interface Props {
  onUpdate: () => void;
}

const withThrottling = <P extends object>(WrappedComponent: ComponentType<P>, delay: number) => {
  const Throttling: FC<P & Props> = (props) => {
    const { onUpdate } = props;
    const throttledUpdate = useEffect(() => throttle(onUpdate, delay), [onUpdate, delay]);

    return <WrappedComponent {...(props as P)} update={throttledUpdate} />;
  };

  return Throttling;
};

export default withThrottling;

//Higher-order components (HOCs) are a powerful pattern in React that can be used in a variety of situations. Here are some common scenarios where you might want to use an HOC:

//Reusability: If you have some functionality that you want to reuse across multiple components, an HOC can provide a way to extract that functionality into a separate component that can be reused.

//Abstraction: If you have a component that is becoming too complex, you can use an HOC to abstract away some of the complexity and make the component more manageable.

//Cross-cutting concerns: If you have some behavior or state that needs to be shared across multiple components (such as authentication status), an HOC can provide a way to share that behavior or state without having to pass it down through every level of the component tree.

//Third-party libraries: If you're using a third-party library that expects a certain structure or behavior in your components, an HOC can provide a way to wrap your components and ensure they meet the library's requirements.

//It's important to note that while HOCs can be a powerful tool, overusing them can lead to code that is difficult to understand and maintain. It's always a good idea to consider other patterns (such as render props or hooks) before reaching for an HOC.
