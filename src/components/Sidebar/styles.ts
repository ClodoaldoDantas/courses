import styled from 'styled-components'
import { devices } from '../../styles/devices'

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.gray500};
  height: 100%;
  width: 100px;

  display: flex;
  flex-direction: column;

  @media ${devices.sm} {
    top: auto;
    left: 0;
    bottom: 0;
    height: 80px;
    width: 100%;
    flex-direction: row;
  }
`

export const SidebarLogo = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.purple500};

  @media ${devices.sm} {
    display: none;
  }
`

export const Menu = styled.nav`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media ${devices.sm} {
    margin-top: 0;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
`

export const MenuItem = styled.button`
  height: 54px;
  width: 54px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: ${(props) => props.theme.colors.white};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover,
  &.active {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.purple500};
  }
`

export const SiderbarFooter = styled.footer`
  height: 100px;
  width: 100px;
  border-top: 1px solid #494e67;
  margin-top: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.sm} {
    display: none;
  }
`
