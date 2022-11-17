import { Box } from '@mui/system'
import React from 'react'
import Chart from 'react-apexcharts'

const AppexChart = () => {

  const chartOptions = {
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [{
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }]
  }

  return (
    <Box>
      <Chart options={chartOptions.options} series={chartOptions.series} type="bar" />
    </Box>
  )
}

export default AppexChart