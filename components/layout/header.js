import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import Link from "next/link";

export default function Header({ isLoggedIn }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        scrollPosition > 200 ? "bg-transition" : ""
      } fixed-top wrapper-custom-navbar`}
    >
      <Container className="sticky-top">
        <Navbar className="custom-navbar position-relative" expand="md">
          <Navbar.Brand>
            <Link href="/">
              <a className="nav-link p-0">Logo</a>
            </Link>
          </Navbar.Brand>

          <div className="wrapper-icons">
            {isLoggedIn && (
              <Link href="/carrello">
                <a href="#">
                  {scrollPosition > 200 ? (
                    <img
                      height="40"
                      width="40"
                      src="/icons/pizza.svg"
                      alt="Carrello"
                    />
                  ) : (
                    <img
                      height="40"
                      width="40"
                      src="/icons/pizza-red.svg"
                      alt="Carrello"
                    />
                  )}
                </a>
              </Link>
            )}

            <Navbar.Toggle
              className="p-0"
              onClick={handleOpen}
              aria-controls="basic-navbar-nav"
            >
              <svg
                className={`ham ham6 ${open ? "active" : ""}`}
                viewBox="0 0 100 100"
                width="80"
              >
                <path
                  className="line top"
                  d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
                />
                <path
                  className="line middle"
                  d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
                />
                <path
                  className="line bottom"
                  d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
                />
              </svg>
            </Navbar.Toggle>
          </div>

          <Navbar.Collapse className={open ? "open" : "closed"}>
            {!isLoggedIn && (
              <Link href="/register">
                <a onClick={handleOpen} className="nav-link">
                  Accedi/Registrati
                </a>
              </Link>
            )}

            {isLoggedIn && (
              <Link href="/profilo">
                <a onClick={handleOpen} className="nav-link">
                  {scrollPosition > 200 ? (
                    <img
                      height="40"
                      width="40"
                      src="/icons/user.svg"
                      alt="Profilo"
                    />
                  ) : (
                    <img
                      height="40"
                      width="40"
                      src="/icons/user-red.svg"
                      alt="Profilo"
                    />
                  )}
                </a>
              </Link>
            )}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}
