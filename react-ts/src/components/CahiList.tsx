import type { Chai } from "../types";
import ChaiCard from "./ChaiCard";

interface CahiListProps {
  items: Chai[];
}

export default function CahiList({ items }: CahiListProps) {
  return (
    <div>
      {items.map((chai) => (
        <ChaiCard
          key={chai.id}
          name={chai.name}
          price={chai.price}
          isSpecial={chai.price > 30}
        />
      ))}
    </div>
  );
}
