import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'
import { useTheme } from 'styled-components'

export function DonutChart() {
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      type: 'donut',
      width: 220,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    colors: [
      theme.colors.red500,
      theme.colors.green500,
      theme.colors.purple500,
      theme.colors.yellow500,
    ],
  }

  const series = [20, 20, 15, 7]

  return (
    <ReactApexChart
      height={220}
      options={options}
      series={series}
      type="donut"
    />
  )
}
