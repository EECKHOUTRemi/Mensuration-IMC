import './App.css'
import FormMeasurement from './components/FormMeasurement'
import FormWeight from './components/FormWeight'

function App() {

  return (
    <>
    <div className="appContainer">
      
      <h1>Bienvenue !</h1>
      <p>Entrez vos données de mensurations ci-dessous pour pouvoir ensuite les consulter dans la rubrique Courbes.</p>

      <form action="POST" id="form">
        <FormWeight/>
        <FormMeasurement/>
      </form>

    </div>
    </>
  )
}

export default App
