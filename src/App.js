import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <h1>Selecione a sua disponibilizade:</h1>
      <form>
        <table>
          <thead>
            <tr>
              <th scope="col">Dia</th>
              <th scope="col">Manhã</th>
              <th scope="col">Tarde</th>
              <th scope="col">Noite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><abbr title="Segunda-feira">Seg.</abbr></th>
              <td><input type="checkbox" name="segunda-manha" value="segunda-manha" /></td>
              <td><input type="checkbox" name="segunda-tarde" value="segunda-tarde" /></td>
              <td><input type="checkbox" name="segunda-noite" value="segunda-noite" /></td>
            </tr>

            <tr>
              <th scope="row"><abbr title="Terça-feira">Ter.</abbr></th>
              <td><input type="checkbox" name="terca-manha" value="terca-manha" /></td>
              <td><input type="checkbox" name="terca-tarde" value="terca-tarde" /></td>
              <td><input type="checkbox" name="terca-noite" value="terca-noite" /></td>
            </tr>

            <tr>
              <th scope="row"><abbr title="Quarta-feira">Qua.</abbr></th>
              <td><input type="checkbox" name="quarta-manha" value="quarta-manha" /></td>
              <td><input type="checkbox" name="quarta-tarde" value="quarta-tarde" /></td>
              <td><input type="checkbox" name="quarta-noite" value="quarta-noite" /></td>
            </tr>
            <tr>
              <th scope="row"><abbr title="Quinta-feira">Qui.</abbr></th>
              <td><input type="checkbox" name="quinta-manha" value="quinta-manha" /></td>
              <td><input type="checkbox" name="quinta-tarde" value="quinta-tarde" /></td>
              <td><input type="checkbox" name="quinta-noite" value="quinta-noite" /></td>
            </tr>
            <tr>
              <th scope="row"><abbr title="Sexta-feira">Sex.</abbr></th>
              <td><input type="checkbox" name="sexta-manha" value="sexta-manha" /></td>
              <td><input type="checkbox" name="sexta-tarde" value="sexta-tarde" /></td>
              <td><input type="checkbox" name="sexta-noite" value="sexta-noite" /></td>
            </tr>
            <tr>
              <th scope="row"><abbr title="Sábado">Sáb.</abbr></th>
              <td><input type="checkbox" name="sabado-manha" value="sabado-manha" /></td>
              <td><input type="checkbox" name="sabado-tarde" value="sabado-tarde" /></td>
              <td><input type="checkbox" name="sabado-noite" value="sabado-noite" /></td>
            </tr>
            <tr>
              <th scope="row"><abbr title="Domingo">Dom.</abbr></th>
              <td><input type="checkbox" name="domingo-manha" value="domingo-manha" /></td>
              <td><input type="checkbox" name="domingo-tarde" value="domingo-tarde" /></td>
              <td><input type="checkbox" name="domingo-noite" value="domingo-noite" /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </main>
  );
}

export default App;
