import "./App.css";
import CahiList from "./components/CahiList";
import Card from "./components/Card";
import ChaiCard from "./components/ChaiCard";
import Counter from "./components/Counter";
import OrderForm from "./components/OrderForm";
import type { Chai } from "./types";

const menu: Chai[] = [
  {
    id: 1,
    name: "Masala",
    price: 30,
  },

  {
    id: 2,
    name: "Ginger",
    price: 50,
  },
  {
    id: 3,
    name: "Lemon",
    price: 60,
  },
];

function App() {
  return (
    <>
      <div>
        <h1>MayankXdev13</h1>
        <ChaiCard name={`Headphones`} price={5000} />
        <ChaiCard name={`PS5`} price={50000} />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <CahiList items={menu} />
      </div>

      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed", order.name, order.cups);
          }}
        />
      </div>
      <div>
        <Card title="Chai aur Typescript" footer={<button>Order Now</button>} />
      </div>
    </>
  );
}

export default App;
