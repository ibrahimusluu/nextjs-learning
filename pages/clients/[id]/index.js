import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router);

  // nested function
  function loadProjectHandler() {
    // load data...
    // /clients/user/projecta --> static
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "user", clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
