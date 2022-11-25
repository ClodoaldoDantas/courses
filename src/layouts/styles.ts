import styled from 'styled-components'
import { devices } from '../styles/devices'

export const Main = styled.main`
  margin-top: 100px;
  margin-left: 100px;
  padding: 2.5rem 4rem 4rem;
  overflow-y: auto;

  @media ${devices.xl} {
    padding: 2.5rem;
  }

  @media ${devices.sm} {
    margin-left: 0;
    margin-bottom: 80px;
    padding: 2rem;
  }

  @media ${devices.xs} {
    padding: 1rem;
  }
`
