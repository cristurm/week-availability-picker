import React from 'react'
import checkAllFromIdFragment from '../dom-handlers/checkbox-checker'

const TableHead = ({dayPeriods}) => (
  <thead>
    <tr>
      <th scope="col" className="screen-reader-only">Dia</th>
      {dayPeriods.map((dayPeriod, index) => (
        <th key={index} scope="col">
          <button type="button" onClick={() => checkAllFromIdFragment(dayPeriod.shortName)}>{dayPeriod.longName}</button>
        </th>
      ))}
    </tr>
  </thead>
)

export default TableHead
