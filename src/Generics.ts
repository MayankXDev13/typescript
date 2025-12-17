function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavor: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

pair("masala", 20);
pair("masala", { flavor: "Ginger" });

interface Box<T> {
  content: T;
}
const numberBox: Box<Number> = { content: 10 };
const numberBox: Box<String> = { content: "10" };

interface ApiPromise<T> {
  status: number;
  data: T;
}

const res: ApiPromise<{ flavor: string }> = {
  status: 20,
  data: {
    flavor: "masala",
  },
};
