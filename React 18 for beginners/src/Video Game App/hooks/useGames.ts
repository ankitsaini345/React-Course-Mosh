import { GameQuery } from "../VideoGameApp";
import useData from "./useData";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platform: gameQuery.platform?.id,
        ordering: gameQuery.sort,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );
};

export default useGames;
