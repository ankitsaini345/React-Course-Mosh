import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setplatformId: (platformId: number) => void;
  setsortOrder: (sortOrder: string) => void;
  setsearchText: (searchText: string) => void;
}

const useGameStore = create<GameQueryStore>((set) => {
  return {
    gameQuery: {},
    setGenreId: (genreId) =>
      set((store) => ({ gameQuery: { ...store.gameQuery, genreId: genreId } })),
    setplatformId: (platformId) =>
      set((store) => ({
        gameQuery: { ...store.gameQuery, platformId: platformId },
      })),
    setsortOrder: (sortOrder) =>
      set((store) => ({
        gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
      })),
    setsearchText: (searchText) =>
      set((store) => ({
        gameQuery: { ...store.gameQuery, searchText: searchText },
      })),
  };
});

export default useGameStore;
