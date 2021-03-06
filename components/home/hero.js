import Link from "next/link";

export default function Hero({ userId, executeScroll }) {
  return (
    <div className="hero position-relative">
      <div className="hero__container d-flex flex-column justify-content-around align-items-center">
        <h1 className="title">Ordina e guadagna punti!</h1>
        <div className="d-flex flex-column">
          <Link href={userId ? "/prodotti/pizze" : "/register"}>
            <a className="btn btn__inverted mb-2 mb-md-4">Ordina ora</a>
          </Link>

          <a onClick={executeScroll} className="btn btn__inverted mt-2 mt-md-4">
            Scopri di più
          </a>
        </div>
      </div>
    </div>
  );
}
