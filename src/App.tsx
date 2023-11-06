import { useFetch } from "./hooks/useFetch";

type Respository = {
  full_name: string;
  description: string;
};

function App() {
  const { data: repositories, isFetching } = useFetch<Respository[]>(
    "/users/ricardoia/repos"
  );

  return (
    <>
      <ul>
        {isFetching && <p>Carregando ...</p>}
        {repositories?.map((repo) => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          );
        })}
      </ul>
      <h1>Hello world!</h1>
    </>
  );
}

export default App;
