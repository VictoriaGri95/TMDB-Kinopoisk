import {useFetchPopularFilmsQuery} from "@/features/films/api/filmsApi.ts";
import {WelcomeSection} from "@/widgets/main/WelcomeSection/WelcomeSection.tsx";
import {MoviesSection} from "@/widgets/main/MoviesSection/MoviesSection.tsx";

export const MainPage = () => {

  const {data: popularFilms, isFetching} = useFetchPopularFilmsQuery({});

  const results = isFetching
    ? Array.from({length: 6}, () => undefined)
    : popularFilms?.results ?? [];

  return (
    <main>
      <WelcomeSection popularFilms={isFetching ? [] : popularFilms?.results ?? []} />
      <MoviesSection popularFilms={results} />
    </main>
  );

}