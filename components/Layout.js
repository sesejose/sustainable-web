import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/#kwh-km">kWh / Km</Link>
            </li>
            <li>
              <Link href="/#co2">Co2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div id="footer" className="">
          <div className="kea">
            <h2>Forms & frameworks</h2>
            <h3>Multimedia Design, KEA 2022</h3>
            <ul>
              <li>{/* <h3>Students:</h3> */}</li>
              <li>
                <p>Karina Elizabeth Valens Chala</p>
              </li>
              <li>
                <p>Nikolett Dékány</p>
              </li>
              <li>
                <p>José Francisco Sesé</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
