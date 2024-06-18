import CityList from '../CityList/CityList';
import Form from '../Form/Form';
import './App.scss';

function App() {
  console.log(import.meta.env.MODE);

  return (
    <div className="app">
      <h1>Widget Meteo de Soso (env : {import.meta.env.MODE})</h1>
      <Form />
      <CityList />
    </div>
  );
}

export default App;
