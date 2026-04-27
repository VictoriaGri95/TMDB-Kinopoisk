import {Navigate, Route, Routes} from "react-router";
import {Path} from "@/common/constants";
import {
  CategoryPage,
  FavoritesPage,
  FilterPage,
  MainPage, PageNotFound,
  SearchPage
} from "@/pages";


export const Routing = () => {
  return (
    <Routes>
      <Route
        path={Path.Main}
        element={<MainPage />}
      />
      <Route
        path={Path.CategoryMovies}
        element={<Navigate
          to={Path.PopularMovies}
          replace
        />}
      />
      {/*<Route*/}
      {/*  path={Path.PopularMovies}*/}
      {/*  element={<CategoryPage />}*/}
      {/*/>*/}
      <Route
        path="/movies/:category"
        element={<CategoryPage />}
      />

      <Route
        path={Path.FilteredMovies}
        element={<FilterPage />}
      />
      <Route
        path={Path.Search}
        element={<SearchPage />}
      />
      <Route
        path={Path.Favorites}
        element={<FavoritesPage />}
      />
      <Route
        path={Path.NotFound}
        element={<PageNotFound />}
      />
    </Routes>
  );
};

