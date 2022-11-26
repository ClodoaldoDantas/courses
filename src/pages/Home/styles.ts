import styled from 'styled-components'
import { devices } from '../../styles/devices'

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
  gap: 1rem;
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
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 2rem;

  @media ${devices.xs} {
    width: 100%;

    button {
      width: 100%;
    }
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'cardStudentsTotal cardAverage cardUnderperforming cardHomeworks'
    'cardBarChart cardBarChart cardStudentsList cardDonutChart'
    'cardLectionsLeft cardHoursSpent cardStudentsList cardDonutChart';
  gap: 2.5rem;

  @media ${devices.xl} {
    gap: 1.5rem;
  }

  @media ${devices.lg} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'cardStudentsTotal cardAverage'
      'cardUnderperforming cardHomeworks'
      'cardBarChart cardBarChart'
      'cardStudentsList cardDonutChart'
      'cardLectionsLeft cardHoursSpent';
  }

  @media ${devices.xs} {
    grid-template-columns: 1fr;
    grid-template-areas:
      'cardStudentsTotal'
      'cardAverage'
      'cardUnderperforming'
      'cardHomeworks'
      'cardStudentsList'
      'cardDonutChart'
      'cardLectionsLeft'
      'cardHoursSpent';
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

    @media ${devices.xs} {
      display: none;
    }
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

export const DonutChartLegend = styled.ul`
  margin-top: 3.5rem;
  list-style: none;

  li + li {
    margin-top: 1.75rem;
  }
`

export const DonutChartLegendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSizes.sm};

  span {
    color: ${(props) => props.theme.colors.gray400};

    &::before {
      content: '';
      height: 8px;
      width: 8px;
      display: inline-block;
      border-radius: 50%;
      margin-right: 0.75rem;
    }
  }

  p {
    color: ${(props) => props.theme.colors.black};
  }

  small {
    font-size: ${(props) => props.theme.fontSizes.xs};
    color: ${(props) => props.theme.colors.gray400};
  }

  &:first-child span::before {
    background-color: ${(props) => props.theme.colors.purple500};
  }

  &:nth-child(2) span::before {
    background-color: ${(props) => props.theme.colors.yellow500};
  }

  &:nth-child(3) span::before {
    background-color: ${(props) => props.theme.colors.red500};
  }

  &:last-child span::before {
    background-color: ${(props) => props.theme.colors.green500};
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
