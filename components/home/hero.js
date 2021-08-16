import Link from "next/link";

export default function Hero({ isLoggedIn }) {
  return (
    <div className="hero">
      <div className="hero__container d-flex flex-column justify-content-around align-items-center">
        <h1 className="title">Ordina e guadagna punti!</h1>
        <div>
          <Link href="/register">
            <a className="btn btn__inverted ordina">Ordina ora</a>
          </Link>
          <Link href="/register">
            <a className="btn btn__inverted scopri">Scopri di più</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
