import React from 'react'
import WEEK_DAYS from '../Data/WeekDays'
import DAY_PERIODS from '../Data/DayPeriods'
import checkAllFromIdFragment from '../Checker/Checker'

const buildKey = (weekDay, dayPeriod) => weekDay.shortName + "-" + dayPeriod.shortName

export default () =>
  WEEK_DAYS.map(weekDay => (
    <tr>
      <th scope="row">
        <button type="button" onClick={checkAllFromIdFragment.bind(this, weekDay.shortName)}>
          <abbr title={weekDay.longName}>
            {weekDay.abbreviatedName}
          </abbr>
        </button>
      </th>
      {DAY_PERIODS.map(dayPeriod => (
        <td>
          <input type="checkbox" name="disponibilidade" value={buildKey(weekDay, dayPeriod)} id={buildKey(weekDay, dayPeriod)} />
          <label for={buildKey(weekDay, dayPeriod)} class="screen-reader-only">{weekDay.longName  + ", " + dayPeriod.longName}</label>
        </td>
      ))}
    </tr>
  )
)
