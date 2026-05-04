import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import type {RootState} from "@/app/model/store.ts";
import {SkeletonTheme} from "react-loading-skeleton";

const SKELETON_THEME = {
  light: {baseColor: '#e2e2e2', highlightColor: '#f5f5f5'},
  dark: {baseColor: '#2a2a2a', highlightColor: '#444'},
}
export const ThemeProvider = ({children}: { children: React.ReactNode }) => {
  const theme = useSelector((state: RootState) => state.app.theme)

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)

    localStorage.setItem('theme', theme)
  }, [theme])
  const skeletonColors = SKELETON_THEME[theme]
  return (
    <SkeletonTheme
      baseColor={skeletonColors.baseColor}
      highlightColor={skeletonColors.highlightColor}
    >
      {children}
    </SkeletonTheme>
  )
}