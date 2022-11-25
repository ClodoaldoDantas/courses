import { Bell, SignOut } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { devices } from '../../styles/devices'
import { Profile } from '../Profile'
import { Search } from '../Search'
import * as S from './styles'

export function Topbar() {
  const theme = useTheme()
  const isSmallDevice = useMediaQuery(devices.sm)

  return (
    <S.TopbarContainer>
      {!isSmallDevice && <Search />}

      <S.TopbarNavigation>
        <Profile />

        <S.TopbarButton type="button">
          <Bell size={24} color={theme.colors.gray400} />
        </S.TopbarButton>

        <S.TopbarButton type="button">
          <SignOut size={24} color={theme.colors.gray400} />
        </S.TopbarButton>
      </S.TopbarNavigation>
    </S.TopbarContainer>
  )
}
