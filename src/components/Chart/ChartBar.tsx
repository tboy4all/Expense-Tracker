import React from 'react'
import './ChartBar.css'

type ChartBarProps = {
  label: string
  maxValue: number
  value: number
}

const ChartBar = ({ label, maxValue, value }: ChartBarProps) => {
  let barfillHeight = '0%'

  if (maxValue > 0) {
    barfillHeight = Math.round((value / maxValue) * 100) + '%'
  }
  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barfillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  )
}

export default ChartBar
