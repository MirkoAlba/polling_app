import { useStoreState } from "easy-peasy";

export default function Cart() {
  const products = useStoreState((state) => state.products);
  console.log(products);
  return <div>ciao</div>;
}
