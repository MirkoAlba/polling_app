import { Navbar } from "react-bootstrap";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar className="custom-navbar" expand="md">
      <Navbar.Brand>
        <Link href="/">
          <a className="nav-link">Logo</a>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span>icona</span>
      </Navbar.Toggle>

      <Navbar.Collapse>
        <Link href="/">
          <a className="nav-link">Link 1</a>
        </Link>

        <Link href="/">
          <a className="nav-link">Link 2</a>
        </Link>

        <Link href="/">
          <a className="nav-link">Link 3</a>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
