export default function Home({ isLoggedIn }) {
  return isLoggedIn ? "si" : "no";
}
