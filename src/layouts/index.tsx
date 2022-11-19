import { ReactNode } from 'react'
import { Sidebar } from '../components/Sidebar'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div>{children}</div>
    </>
  )
}
