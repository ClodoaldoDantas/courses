import styled from 'styled-components'

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const UserListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.black};
  }
`

export const UserListItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`
