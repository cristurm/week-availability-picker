import React from 'react'
import DayRows from './DayRows'
import './App.css'

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

  render () {
    return (
      <main>
        <h1>Selecione a sua Disponibilizade</h1>
        <form onSubmit={this.parseData.bind(this)}>
          <table>
            <thead>
              <tr>
                <th scope="col" class="screen-reader-only">Dia</th>
                <th scope="col">Manhã</th>
                <th scope="col">Tarde</th>
                <th scope="col">Noite</th>
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
