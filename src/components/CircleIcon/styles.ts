import styled, { css } from 'styled-components'
import { rgba } from 'polished'

export type CircleIconVariant = 'purple' | 'green' | 'yellow' | 'red' | 'blue'

interface CircleIconContainerProps {
  variant: CircleIconVariant
}

export const CircleIconContainer = styled.div<CircleIconContainerProps>`
  flex-shrink: 0;
  height: 70px;
  width: 70px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.variant === 'blue' &&
    css`
      background: ${rgba(props.theme.colors.blue500, 0.08)};
      color: ${props.theme.colors.blue500};
    `}

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${rgba(props.theme.colors.green400, 0.08)};
      color: ${props.theme.colors.green400};
    `}

  ${(props) =>
    props.variant === 'red' &&
    css`
      background: ${rgba(props.theme.colors.red500, 0.06)};
      color: ${props.theme.colors.red500};
    `}

  ${(props) =>
    props.variant === 'purple' &&
    css`
      background: ${rgba(props.theme.colors.purple500, 0.06)};
      color: ${props.theme.colors.purple500};
    `}

  ${(props) =>
    props.variant === 'yellow' &&
    css`
      background: ${rgba(props.theme.colors.yellow500, 0.08)};
      color: ${props.theme.colors.yellow500};
    `}
`
