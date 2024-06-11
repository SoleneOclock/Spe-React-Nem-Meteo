import { ICity } from '../../@types/city';

export default function City({ city }: { city: ICity }) {
  return (
    <div className="city">
      <h2>{city.name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${city.icon}@2x.png`}
        alt="nuageux"
      />
      <h3>{city.temp}°C</h3>
    </div>
  );
}
