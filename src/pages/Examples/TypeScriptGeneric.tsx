import GenericListComponent from "../../components/GenericListComponent/GenericListComponent";

const TypeScriptGeneric = () => {
  type Person = { name: string; age: number };

  function identity<Type>(arg: Type) {
    return arg;
  }

  const a = 5;
  const b = identity(a);

  const aa = "Tomas";
  const bb = identity(aa);

  const aaa = { name: "Tomas" };
  const bbb = identity(aaa);

  const people: Person[] = [
    { name: "John Doe", age: 30 },
    { name: "Jane Doe", age: 25 },
    { name: "Bob Smith", age: 40 },
  ];

  return (
    <>
      <GenericListComponent<Person>
        items={people}
        renderItem={(person) => (
          <div>
            <div>{person.name}</div>
            <div>{person.age}</div>
          </div>
        )}
      />
      <GenericListComponent
        items={[{ id: 1, date: "2012" }]}
        renderItem={(item) => (
          <div>
            <div>{item.id}</div>
            <div>{item.date}</div>
          </div>
        )}
      />
    </>
  );
};

export default TypeScriptGeneric;
