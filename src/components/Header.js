import { useRef } from "react";

function Header() {
  const homepage = useRef();
  const archivesPage = useRef();
  return (
    <header>
      <nav>
        <ul className="flex justify-around items-center">
          <a href="#homepage" ref={homepage}>
            <img src="./images/logo.png" alt="Logo Maison Salvi" />
          </a>
          <a href="#homepage" ref={homepage}>
            <li>Menu du jour</li>
          </a>
          <a href="#archivesPage" ref={archivesPage}>
            <li>Archives</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
