import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.font};

    font-size: ${(props) => props.theme.fontSizes.md};
  }

  h1, h2, h3 {
    color: ${(props) => props.theme.colors.black};
    font-weight: ${(props) => props.theme.fontWeights.semibold};
  }

  body {
    background-color: ${(props) => props.theme.colors.gray50};
    color: ${(props) => props.theme.colors.gray400};
    font-weight: ${(props) => props.theme.fontWeights.medium};
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`
