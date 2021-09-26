import { useState } from "react";

import { Navbar } from "react-bootstrap";
import { FiUsers, FiSettings } from "react-icons/fi";
import { FaPizzaSlice } from "react-icons/fa";
import { BiEuro } from "react-icons/bi";

import Link from "next/link";

export default function HeaderAdmin() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Navbar
      bg="primary"
      className={`navbar-admin px-1 flex-column align-items-start ${
        open ? "navbar-admin--collapsed" : ""
      }`}
    >
      <p
        onClick={handleOpen}
        className="text-dark m-0 px-3 d-flex align-items-center justify-content-between"
      >
        <span>Dashboard</span>
        <svg
          className={`ham ham--admin ham6 ${open ? "" : "active"}`}
          viewBox="0 0 100 100"
          width="80"
        >
          <path
            className="line line--admin top"
            d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
          />
          <path
            className="line line--admin middle"
            d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
          />
          <path
            className="line line--admin bottom"
            d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
          />
        </svg>
      </p>

      <div className="sidebar pr-3 w-100">
        <ul>
          <li>
            <Link href="/">
              <a>
                <FaPizzaSlice /> <span>Ordini</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>
                <FiUsers /> <span>Utenti</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>
                <BiEuro /> <span>Guadagni</span>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>
                <FiSettings /> <span>Impostazioni</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}
