import { ReactNode } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Topbar } from '../components/Topbar'
import * as S from './styles'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <Topbar />

      <S.Main>{children}</S.Main>
    </>
  )
}
