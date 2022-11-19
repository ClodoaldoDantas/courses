import { MagnifyingGlass } from 'phosphor-react'
import { useTheme } from 'styled-components'
import * as S from './styles'

export function Search() {
  const theme = useTheme()

  return (
    <S.SearchContainer>
      <MagnifyingGlass size={24} color={theme.colors.gray400} />
      <S.SearchField type="text" placeholder="Search..." />
    </S.SearchContainer>
  )
}
