// Union Types and Literal Types in TypeScript

let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "error";

let airlineSeat: "aisle" | "middle" | "window" = "middle";

const orders = ["12", "20", "28", "42"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
