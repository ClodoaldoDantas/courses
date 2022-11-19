import styled from 'styled-components'

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.gray500};
  height: 100%;
  width: 100px;

  display: flex;
  flex-direction: column;
`

export const SidebarLogo = styled.div`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.purple500};
`

export const Menu = styled.nav`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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
`
