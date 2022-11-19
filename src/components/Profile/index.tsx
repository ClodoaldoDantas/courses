import { CaretDown } from 'phosphor-react'
import { useTheme } from 'styled-components'
import profileImg from '../../assets/profile.png'
import * as S from './styles'

export function Profile() {
  const theme = useTheme()

  return (
    <S.ProfileContainer type="button">
      <S.ProfileContent>
        <strong>Cody Simmmons</strong>
        <span>Lecturer</span>
      </S.ProfileContent>

      <img src={profileImg} alt="Cody Simmmons" />

      <CaretDown size={24} color={theme.colors.gray400} />
    </S.ProfileContainer>
  )
}
