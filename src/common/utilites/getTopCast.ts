import type {Cast} from "@/features/films/api/filmsApi.types.ts";

export const getTopCast = (cast: Cast[]): Cast[] => {
  return [...cast]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 6);
}