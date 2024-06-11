import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import thunkFetchMeteo from '../../store/thunkFetchMeteo';

export default function Form() {
  const dispatch = useAppDispatch();

  // state pour controle de l'input
  const [inputValue, setInputValue] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // on veut ajouter une ville dans le state de redux mais avant on veut recuperer sa météo, chacun son job :
        // - thunk : pour recup la méteo
        // - reducer : pour enregistrer cette nouvelle ville et sa météo dans le state
        dispatch(thunkFetchMeteo(inputValue));

        // et puis on vide l'input
        setInputValue('');
      }}
    >
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button type="submit">OK</button>
    </form>
  );
}
