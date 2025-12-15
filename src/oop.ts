// class Cahi {
//   flavor: string;
//   price: number;

//   // constructor(flavour: string, price: number) {
//   //     this.flavor = flavour
//   //     this.price = price
//   // }

//   constructor(flavour: string, price: number) {
//     this.flavor = flavour;
//     // this.price = price
//     console.log(this);
//   }
// }

// const masalaCahi = new Cahi("Ginger");
// masalaCahi.flavor = "masala";

class Chai {
  public flavor: string = "Masala";
  private secretIngredients = "Cardamom";

  reveal() {
    return this.secretIngredients; // ok
  }
}
class Shop {
  protected shopName = "Chai Corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName; // ok
  }
}

const c = new Chai();

class Walet {
  #balance = 100;

  getBalance() {
    return this.#balance;
  }
}

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity;
  }
}

class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}

const m = new ModernChai();

m.sugar = 2;

class EkChai {
  static shopName = "Chaicode caffe";
  constructor(public flavour: string) {}
}

console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {}
}

class Heater {
  heat() {}
}

class ChiaMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}
