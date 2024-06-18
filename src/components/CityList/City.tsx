import { ICity } from '../../@types/city';

export default function City({ city }: { city: ICity }) {
  // on recupere la valeur d'une variable d'environement dans import.meta.env (c'est avec vite ) si on est avec next il les place dans une varibale appelée process.env.

  const apiURL = import.meta.env.VITE_BASE_URL;

  return (
    <div className="city">
      <h2>{city.name}</h2>
      <img src={`${apiURL}img/wn/${city.icon}@2x.png`} alt="nuageux" />
      <h3>{city.temp}°C</h3>
    </div>
  );
}
