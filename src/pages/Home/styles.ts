import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  h1 {
    font-size: ${(props) => props.theme.fontSizes['3xl']};
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    'cardOne cardTwo cardThree cardFour'
    'cardFive cardFive cardSix cardSeven'
    'cardEight cardNine cardSix cardSeven';
  gap: 2.5rem;

  .card-one {
    grid-area: cardOne;
  }

  .card-two {
    grid-area: cardTwo;
  }

  .card-three {
    grid-area: cardThree;
  }

  .card-four {
    grid-area: cardFour;
  }

  .card-five {
    grid-area: cardFive;
  }

  .card-six {
    grid-area: cardSix;
  }

  .card-seven {
    grid-area: cardSeven;
  }

  .card-eight {
    grid-area: cardEight;
  }

  .card-nine {
    grid-area: cardNine;
  }
`
