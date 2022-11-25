import styled from 'styled-components'
import { devices } from '../../styles/devices'

export const TopbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 100px;
  z-index: 10;

  background-color: ${(props) => props.theme.colors.white};
  padding: 0 4rem;
  height: 100px;
  width: calc(100% - 100px);

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${devices.xl} {
    padding: 0 2.5rem;
  }

  @media ${devices.sm} {
    left: 0;
    width: 100%;
    justify-content: flex-end;
    padding: 0 2rem;
  }

  @media ${devices.xs} {
    padding: 0 1rem;
  }
`

export const TopbarNavigation = styled.nav`
  display: flex;
  align-items: center;

  button {
    &:first-child {
      margin-right: 1.5rem;
      padding-right: 1.5rem;
      border-right: 1px solid #e6e9ed;
    }

    &:last-child {
      margin-left: 1.5rem;
    }
  }
`

export const TopbarButton = styled.button`
  border: 0;
  font-size: 0;
  background: transparent;
`
