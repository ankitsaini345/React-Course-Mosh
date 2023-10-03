import useGenres from "./useGenres";

const usePlatform = (platformId?: number) => {
  const { data: platforms } = useGenres();

  return platforms?.results.find((platform) => platformId === platform.id);
};

export default usePlatform;
