import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import City from './City';
import './City.scss';

export default function CityList() {
  const cities = useAppSelector((state: RootState) => state.cities);

  return (
    <div className="cityList">
      {cities.map((city) => (
        <City key={city.name} city={city} />
      ))}
    </div>
  );
}
