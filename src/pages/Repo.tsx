import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { Respository } from "./Repos";

export function Repo() {
  const params = useParams();
  const currentRepository = params["*"] as string;

  const queryClient = useQueryClient();

  async function handleChangeRepositoryDescription() {
    //await queryClient.invalidateQueries(["repos"]);

    const previousRepos = queryClient.getQueryData<Respository[]>("repos");

    if (previousRepos) {
      const nextRepos = previousRepos.map((repo) => {
        if (repo.full_name == currentRepository) {
          return { ...repo, description: "Testando" };
        } else {
          return repo;
        }
      });
    }
  }

  return (
    <>
      <h1>{currentRepository}</h1>
      <button onClick={handleChangeRepositoryDescription}>Alterar</button>
    </>
  );
}
