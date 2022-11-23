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
  grid-template-rows: 154px 1fr 154px;
  grid-template-areas:
    'cardStudentsTotal cardAverage cardUnderperforming cardHomeworks'
    'cardBarChart cardBarChart cardStudentsList cardDonutChart'
    'cardLectionsLeft cardHoursSpent cardStudentsList cardDonutChart';
  gap: 2.5rem;

  @media (max-width: 1399.98px) {
    gap: 1.5rem;
  }

  .card-students-total {
    grid-area: cardStudentsTotal;
  }

  .card-average {
    grid-area: cardAverage;
  }

  .card-underperforming {
    grid-area: cardUnderperforming;
  }

  .card-homeworks {
    grid-area: cardHomeworks;
  }

  .card-bar-chart {
    grid-area: cardBarChart;
  }

  .card-students-list {
    grid-area: cardStudentsList;
  }

  .card-donut-chart {
    grid-area: cardDonutChart;
  }

  .card-lections-left {
    grid-area: cardLectionsLeft;
  }

  .card-hours-spent {
    grid-area: cardHoursSpent;
  }
`

export const BarChatLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    font-size: ${(props) => props.theme.fontSizes.sm};

    &::before {
      content: '';
      display: inline-block;
      height: 8px;
      width: 8px;
      margin-right: 12px;
      border-radius: 50%;
      background: red;
    }

    &:first-child::before {
      background: ${(props) => props.theme.colors.purple500};
    }

    &:last-child::before {
      background: ${(props) => props.theme.colors.orange500};
    }
  }
`

export const SortButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;

  border: 0;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSizes.sm};
  color: ${(props) => props.theme.colors.gray400};
`
