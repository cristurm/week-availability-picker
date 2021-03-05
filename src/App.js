import React, { useState } from 'react'
import TableBody from './components/TableBody'
import TableHead from './components/TableHead'
import { WEEK_DAYS, DAY_PERIODS } from './data/data'

const App = () => {
  const [disponibilidade, setDisponibilidade] = useState([]);

  const parseData = event => {
    event.preventDefault()

    const formData = new FormData(event.target)
    setDisponibilidade(formData.getAll("disponibilidade"))
  }

  return (
    <main>
      <h1>Selecione sua Disponibilizade</h1>

      <form onSubmit={(event) => parseData(event)}>
        <table>
          <TableHead dayPeriods={DAY_PERIODS} />
          <TableBody weekDays={WEEK_DAYS} dayPeriods={DAY_PERIODS} />
        </table>

        <button type="submit" name="Enviar">Prontinho!</button>
      </form>

      <p>{disponibilidade.join(', ')}</p>
    </main>
  )
}

export default App
