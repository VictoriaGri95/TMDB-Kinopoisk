import {type ChangeEvent, useState} from 'react'
import {useLocation, useNavigate, useSearchParams} from "react-router";
import {Path} from "@/common/constants";
import s from './SearchBar.module.css'


export const SearchBar = () => {

  const navigate = useNavigate()
  const location = useLocation();

  const [searchParams] = useSearchParams()
  const queryFromUrl = searchParams.get('query') || ''

  const [query, setQuery] = useState(queryFromUrl)

  const handleSearch = () => {
    if (!query.trim()) return
    navigate(`${Path.Search}?query=${encodeURIComponent(query)}`)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setQuery(newValue);

    if (!newValue.trim() && location.pathname === Path.Search) {
      navigate(Path.Search);
    }
  }

  return (
    <div className={s.container}>
      <input
        type="search"
        className={s.input}
        value={query}
        onChange={onChangeHandler}
        placeholder="Search movies..."
        aria-label="Search movies"
      />

      <button
        disabled={!query.trim()}
        onClick={handleSearch}
        className={s.button}
      >

        Search
      </button>
    </div>
  )
}