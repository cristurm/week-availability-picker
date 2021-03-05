import React from 'react'
import checkAllFromIdFragment from '../dom-handlers/checkbox-checker'

const buildKey = (weekDay, dayPeriod) => weekDay.shortName + "-" + dayPeriod.shortName

const TableBody = ({ weekDays, dayPeriods }) => (
  <tbody>
    {weekDays.map((weekDay, indexA) => (
      <tr key={indexA}>
        <th scope="row">
          <button type="button" onClick={() => checkAllFromIdFragment(weekDay.shortName)}>
            <abbr title={weekDay.longName}>
              {weekDay.abbreviatedName}
            </abbr>
          </button>
        </th>
        {dayPeriods.map((dayPeriod, indexB) => (
          <td key={`${indexA}-${indexB}`}>
            <input type="checkbox" name="disponibilidade" value={buildKey(weekDay, dayPeriod)} id={buildKey(weekDay, dayPeriod)} />
            <label htmlFor={buildKey(weekDay, dayPeriod)} className="screen-reader-only">{weekDay.longName  + ", " + dayPeriod.longName}</label>
          </td>
        ))}
      </tr>
    )
  )}
  </tbody>
)

export default TableBody
