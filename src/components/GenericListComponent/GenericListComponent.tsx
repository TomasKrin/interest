import { ReactNode } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

const GenericListComponent = <T,>({ items, renderItem }: Props<T>) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </div>
  );
};

export default GenericListComponent;
