type CahiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: CahiOrder) {
  console.log(order);
}

function serveChai(order: CahiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaType) {
  console.log(t);
}

type BaseCahi = {
  teaLeaves: number;
};

type Extra = { masala: number };

type MasalaChai = BaseCahi & Extra;

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const ui: User = {
  username: "Hitesh",
};

const u2: User = {
  username: "Mayank",
  bio: "hitesh.ai",
};

type Config = {
    readonly appName: String
    version: number
}

const cfg: Config = {
    appName: "Masterji",
    version: 1
}

cfg.appName = "chaiCode"
