import React from 'react'
import WEEK_DAYS from './WeekDays'

export default () =>
  WEEK_DAYS.map((weekDay) => (
    <tr>
      <th scope="row"><abbr title={weekDay.longName}>{weekDay.abbreviatedName}</abbr></th>
      <td>
        <input type="checkbox" name="disponibilidade" value={weekDay.shortName + "-manha"} id={weekDay.shortName + "-manha"} />
        <label for={weekDay.shortName + "-manha"} class="screen-reader-only">Manhã, {weekDay.shortName}</label>
      </td>
      <td>
        <input type="checkbox" name="disponibilidade" value={weekDay.shortName + "-tarde"} id={weekDay.shortName + "-tarde"} />
        <label for={weekDay.shortName + "-tarde"} class="screen-reader-only">Tarde, {weekDay.shortName}</label>
      </td>
      <td>
        <input type="checkbox" name="disponibilidade" value={weekDay.shortName + "-noite"} id={weekDay.shortName + "-noite"} />
        <label for={weekDay.shortName + "-noite"} class="screen-reader-only">Noite, {weekDay.shortName}</label>
      </td>
    </tr>
  )
)
