import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  max-width: 300px;
  width: 100%;
`

export const SearchField = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  color: ${(props) => props.theme.colors.gray500};
  padding: 1rem 0;
  flex: 1;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray400};
  }
`
