import React from 'react'
import DayRows from '../DayRows/DayRows'
import DAY_PERIODS from '../Data/DayPeriods'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {disponibilidade: []}
  }

  parseData (event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    this.setState({disponibilidade: formData.getAll("disponibilidade")})
  }

  checkAllFromDayPeriod (period) {
    const periodCheckboxes = document.querySelectorAll("input[id$='" + period + "']")
    const everyCheckBoxIsLikeTheFirst = [...periodCheckboxes].every(checkbox => checkbox.checked === periodCheckboxes[0].checked)

    if (everyCheckBoxIsLikeTheFirst) {
      // toggle everything
      periodCheckboxes.forEach(checkbox => checkbox.checked = !checkbox.checked)
    } else {
      // copy first one to the rest
      periodCheckboxes.forEach(checkbox => checkbox.checked = periodCheckboxes[0].checked)
    }
  }

  render () {
    return (
      <main>
        <h1>Selecione sua Disponibilizade</h1>
        <form onSubmit={this.parseData.bind(this)}>
          <table>
            <thead>
              <tr>
                <th scope="col" class="screen-reader-only">Dia</th>
                {DAY_PERIODS.map(dayPeriod => (
                  <th scope="col">
                    <button type="button" onClick={this.checkAllFromDayPeriod.bind(this, dayPeriod.shortName)}>{dayPeriod.longName}</button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            <DayRows />
            </tbody>
          </table>

          <button type="submit" name="Enviar">Prontinho!</button>
        </form>

        <p>{this.state.disponibilidade.toString()}</p>
      </main>
    )
  }
}

export default App
