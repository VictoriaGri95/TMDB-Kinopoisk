import {useAppDispatch, useAppSelector} from "@/common/hooks";
import {selectThemeMode, toggleTheme} from "@/app/model/app-slice.ts";
import s from './ThemeToggle.module.css'

export const ThemeToggle = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectThemeMode)
  const isChecked = theme === 'dark'

  const onChangeHandler = () => {
    dispatch(toggleTheme())
  }

  return (
    <label className={s.switch}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChangeHandler}
      />
      <span className={`${s.slider} ${isChecked ? s.checked : ''}`}>
        <span className={`${s.icon} ${s.sun}`}>☀️</span>
        <span className={`${s.icon} ${s.moon}`}>🌙</span>
      </span>
    </label>
  )
}

