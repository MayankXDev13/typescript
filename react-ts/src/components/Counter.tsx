import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Cups orderded: {count}</p>
      <button onClick={() => setCount(count + 1)}>Order one more </button>
    </div>
  );
}
