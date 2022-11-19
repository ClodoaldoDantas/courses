import styled from 'styled-components'

export const SimpleCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  padding: 2rem;
  border-bottom: 3px solid ${(props) => props.theme.colors.gray200};

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    h2 {
      font-size: ${(props) => props.theme.fontSizes['2xl']};

      small {
        font-size: ${(props) => props.theme.fontSizes.lg};
        color: ${(props) => props.theme.colors.gray400};
      }
    }

    span {
      font-size: ${(props) => props.theme.fontSizes.sm};
    }
  }
`

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 10px;
  border-bottom: 3px solid ${(props) => props.theme.colors.gray200};

  header {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray100};

    h3 {
      font-size: ${(props) => props.theme.fontSizes.sm};
    }
  }

  .content {
    padding: 2rem;
  }
`
