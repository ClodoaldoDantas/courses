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
    { id: 'folder', icon: Folder, label: 'Projetos' },
    { id: 'chartBar', icon: ChartBar, label: 'Estatísticas' },
    { id: 'envelope', icon: Envelope, label: 'Mensagens' },
    { id: 'file', icon: File, label: 'Arquivos' },
  ]

  return (
    <S.SidebarContainer>
      <S.SidebarLogo>
        <GraduationCap size={36} color={theme.colors.white} />
      </S.SidebarLogo>

      <S.Menu>
        {menuItems.map(({ id, icon: Icon, label }) => (
          <S.MenuItem
            key={id}
            onClick={() => setMenuItemActive(id)}
            className={menuItemActive === id ? 'active' : ''}
            aria-label={label}
          >
            <Icon size={24} />
          </S.MenuItem>
        ))}
      </S.Menu>

      <S.SiderbarFooter>
        <S.MenuItem aria-label="Configurações">
          <Gear size={24} />
        </S.MenuItem>
      </S.SiderbarFooter>
    </S.SidebarContainer>
  )
}
