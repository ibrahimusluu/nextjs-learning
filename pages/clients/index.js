import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "user", name: "İbrahim" },
    { id: "another", name: "Another" },
  ];

  return (
    <div>
      <h1>Clients Page</h1>
      <ul>
        {/* *********** SIMPLE WAY in React *********** */}
        {/* <li>
          <Link href="/clients/user">İbrahim Uslu</Link>
        </li>
        <li>
          <Link href="/clients/anotherUsers">Another</Link>
        </li> */}
        {/* *********** 1. WAY *********** */}
        {/* {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))} */}
        {/* *********** 2. WAY *********** */}
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]", // index.js under [id] of "clients" folder
                query: { id: client.id }, // should be same name with "dynamic id name"
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
