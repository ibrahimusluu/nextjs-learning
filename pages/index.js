import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {/* anchor tag has disadvantage */}
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
