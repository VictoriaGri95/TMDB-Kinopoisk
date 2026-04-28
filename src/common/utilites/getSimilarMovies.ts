import type {Movie} from "@/features/films/api/filmsApi.types.ts";

export const getSimilarMovies = (movie: Movie[]): Movie[] => {
  return [...movie]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);
}