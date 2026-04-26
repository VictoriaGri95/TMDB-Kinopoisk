import {useFetchPopularFilmsQuery} from "@/features/films/api/filmsApi.ts";
import {WelcomeSection} from "@/widgets/main/WelcomeSection/WelcomeSection.tsx";
import {MoviesSection} from "@/widgets/main/MoviesSection/MoviesSection.tsx";

export const MainPage = () => {

  const {data: popularFilms, isLoading,} = useFetchPopularFilmsQuery({})


  if (isLoading || !popularFilms) {
    return <div>Loading...</div>
  }
  return (
    <main>
      <WelcomeSection popularFilms={popularFilms.results} />
      <MoviesSection popularFilms={popularFilms.results} />
    </main>
  );
};

