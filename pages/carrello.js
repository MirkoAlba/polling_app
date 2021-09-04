import { useStoreState } from "easy-peasy";

export default function Cart() {
  const products = useStoreState((state) => state.products);
  const cart = useStoreState((state) => state.cart);
  // console.log(cart);
  return <div>ciao</div>;
}
