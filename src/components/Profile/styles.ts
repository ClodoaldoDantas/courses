import styled from 'styled-components'

export const ProfileContainer = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;

  img {
    margin-right: 0.75rem;
  }

  svg {
    flex-shrink: 0;
  }
`

export const ProfileContent = styled.div`
  margin-right: 0.875rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  strong {
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.black};
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.gray400};
  }
`
