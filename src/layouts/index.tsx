import { ReactNode } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Topbar } from '../components/Topbar'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <Topbar />
      <div>{children}</div>
    </>
  )
}
