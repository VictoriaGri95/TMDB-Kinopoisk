import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import type {RootState} from "@/app/model/store.ts";


export const ThemeProvider = ({children}: { children: React.ReactNode }) => {
  const theme = useSelector((state: RootState) => state.app.theme)

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)

    localStorage.setItem('theme', theme)
  }, [theme])

  return <>{children}</>
}