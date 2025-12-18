interface CahiCardProp {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export default function ChaiCard({
  name,
  price,
  isSpecial = false,
}: CahiCardProp) {
  return (
    <article>
      <h2>
        {name} {isSpecial && <span>*</span>}
      </h2>
      <p>{price}</p>
    </article>
  );
}
