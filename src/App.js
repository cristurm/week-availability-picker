import React from 'react'
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
              <tr>
                <th scope="row"><abbr title="Segunda-feira">Seg.</abbr></th>
                <td>
                  <input type="checkbox" name="disponibilidade" value="segunda-manha" id="segunda-manha" />
                  <label for="segunda-manha" class="screen-reader-only">Manhã, segunda</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="segunda-tarde" id="segunda-tarde" />
                  <label for="segunda-tarde" class="screen-reader-only">Tarde, segunda</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="segunda-noite" id="segunda-noite" />
                  <label for="segunda-noite" class="screen-reader-only">Noite, segunda</label>
                </td>
              </tr>
              <tr>
                <th scope="row"><abbr title="Terça-feira">Ter.</abbr></th>
                <td>
                  <input type="checkbox" name="disponibilidade" value="terca-manha" id="terca-manha" />
                  <label for="terca-manha" class="screen-reader-only">Manhã, terça</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="terca-tarde" id="terca-tarde" />
                  <label for="terca-tarde" class="screen-reader-only">Tarde, terça</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="terca-noite" id="terca-noite" />
                  <label for="terca-noite" class="screen-reader-only">Noite, terça</label>
                </td>
              </tr>
              <tr>
                <th scope="row"><abbr title="Quarta-feira">Qua.</abbr></th>
                <td>
                  <input type="checkbox" name="disponibilidade" value="quarta-manha" id="quarta-manha" />
                  <label for="quarta-manha" class="screen-reader-only">Manhã, quarta</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="quarta-tarde" id="quarta-tarde" />
                  <label for="quarta-tarde" class="screen-reader-only">Tarde, quarta</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="quarta-noite" id="quarta-noite" />
                  <label for="quarta-noite" class="screen-reader-only">Noite, quarta</label>
                </td>
              </tr>
              <tr>
                <th scope="row"><abbr title="Quinta-feira">Qui.</abbr></th>
                <td>
                  <input type="checkbox" name="disponibilidade" value="quinta-manha" id="quinta-manha" />
                  <label for="quinta-manha" class="screen-reader-only">Manhã, quinta</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="quinta-tarde" id="quinta-tarde" />
                  <label for="quinta-tarde" class="screen-reader-only">Tarde, quinta</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="quinta-noite" id="quinta-noite" />
                  <label for="quinta-noite" class="screen-reader-only">Noite, quinta</label>
                </td>
              </tr>
              <tr>
                <th scope="row"><abbr title="Sexta-feira">Sex.</abbr></th>
                <td>
                  <input type="checkbox" name="disponibilidade" value="sexta-manha" id="sexta-manha" />
                  <label for="sexta-manha" class="screen-reader-only">Manhã, sexta</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="sexta-tarde" id="sexta-tarde" />
                  <label for="sexta-tarde" class="screen-reader-only">Tarde, sexta</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="sexta-noite" id="sexta-noite" />
                  <label for="sexta-noite" class="screen-reader-only">Noite, sexta</label>
                </td>
              </tr>
              <tr>
                <th scope="row"><abbr title="Sábado">Sáb.</abbr></th>
                <td>
                  <input type="checkbox" name="disponibilidade" value="sabado-manha" id="sabado-manha" />
                  <label for="sabado-manha" class="screen-reader-only">Manhã, sábado</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="sabado-tarde" id="sabado-tarde" />
                  <label for="sabado-tarde" class="screen-reader-only">Tarde, sábado</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="sabado-noite" id="sabado-noite" />
                  <label for="sabado-noite" class="screen-reader-only">Noite, sábado</label>
                </td>
              </tr>
              <tr>
                <th scope="row"><abbr title="Domingo">Dom.</abbr></th>
                <td>
                  <input type="checkbox" name="disponibilidade" value="domingo-manha" id="domingo-manha" />
                  <label for="domingo-manha" class="screen-reader-only">Manhã, domingo</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="domingo-tarde" id="domingo-tarde" />
                  <label for="domingo-tarde" class="screen-reader-only">Tarde, domingo</label>
                </td>
                <td>
                  <input type="checkbox" name="disponibilidade" value="domingo-noite" id="domingo-noite" />
                  <label for="domingo-noite" class="screen-reader-only">Noite, domingo</label>
                </td>
              </tr>
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
