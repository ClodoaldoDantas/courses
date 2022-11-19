import styled, { css } from 'styled-components'

interface ButtonProps {
  outline?: boolean
}

export const Button = styled.button<ButtonProps>`
  padding: 0.875rem 1.25rem;
  border: 0;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;

  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.semibold};

  background-color: ${(props) => props.theme.colors.purple500};
  color: ${(props) => props.theme.colors.white};

  ${(props) =>
    props.outline &&
    css`
      border: 1px solid #dadce5;
      background-color: transparent;
      color: ${(props) => props.theme.colors.purple500};
    `}
`
