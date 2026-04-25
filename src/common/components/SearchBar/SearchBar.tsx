import {type ChangeEvent, useState} from 'react'
import {useNavigate} from "react-router";
import {Path} from "@/common/constants";
import s from './SearchBar.module.css'


export const SearchBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!query.trim()) return
    navigate(`${Path.Search}?query=${query}`)
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className={s.container}>
      <input
        type="search"
        className={s.input}
        value={query}
        onChange={onChangeHandler}
        placeholder="Search movies..."

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