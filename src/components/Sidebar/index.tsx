import { useState } from 'react'
import { useTheme } from 'styled-components'
import {
  GraduationCap,
  Folder,
  ChartBar,
  Envelope,
  File,
  Gear,
} from 'phosphor-react'

import * as S from './styles'

export function Sidebar() {
  const theme = useTheme()
  const [menuItemActive, setMenuItemActive] = useState('folder')

  const menuItems = [
    { id: 'folder', icon: Folder },
    { id: 'chartBar', icon: ChartBar },
    { id: 'envelope', icon: Envelope },
    { id: 'file', icon: File },
  ]

  return (
    <S.SidebarContainer>
      <S.SidebarLogo>
        <GraduationCap size={36} color={theme.colors.white} />
      </S.SidebarLogo>

      <S.Menu>
        {menuItems.map(({ id, icon: Icon }) => (
          <S.MenuItem
            key={id}
            onClick={() => setMenuItemActive(id)}
            className={menuItemActive === id ? 'active' : ''}
          >
            <Icon size={24} />
          </S.MenuItem>
        ))}
      </S.Menu>

      <S.SiderbarFooter>
        <S.MenuItem>
          <Gear size={24} />
        </S.MenuItem>
      </S.SiderbarFooter>
    </S.SidebarContainer>
  )
}
