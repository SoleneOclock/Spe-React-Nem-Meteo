import CityList from '../CityList/CityList';
import Form from '../Form/Form';
import './App.scss';

function App() {
  // vite va cherche le password dan sle fichier local or ce fichier n'est pas commité
  // mais on a ajouté un .env.exemple pour que toi dev collegue si tu recupere mon code tu sache quelle variable ajouter à ton .env.local pour que ça marche
  console.log(import.meta.env.VITE_PASSWORD_API);

  return (
    <div className="app">
      <h1>Widget Meteo de Soso (env : {import.meta.env.MODE})</h1>
      <Form />
      <CityList />
    </div>
  );
}

export default App;
