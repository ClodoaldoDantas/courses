import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useTheme } from 'styled-components'

export function BarChart() {
  const theme = useTheme()

  const options: ApexOptions = {
    colors: [theme.colors.purple500, theme.colors.orange500],
    chart: {
      type: 'bar',
      height: 250,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      borderColor: '#EDEFF5',
      strokeDashArray: 7,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      labels: {
        style: {
          fontFamily: theme.font,
          fontSize: theme.fontSizes.sm,
          colors: theme.colors.gray400,
        },
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      tickAmount: 4,
      min: 5,
      max: 25,
      labels: {
        style: {
          fontFamily: theme.font,
          fontSize: theme.fontSizes.sm,
          colors: theme.colors.gray400,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: 'dark',
    },
    legend: {
      show: false,
    },
  }

  const series = [
    {
      name: 'Applied',
      data: [18, 15, 24, 8, 12, 10, 18, 8, 19, 14, 16, 25],
    },
    {
      name: 'Left',
      data: [16, 7, 14, 7, 7, 9, 15, 10, 13, 12, 7, 14],
    },
  ]

  return (
    <ReactApexChart height={250} options={options} series={series} type="bar" />
  )
}
