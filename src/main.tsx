import ReactDOM from 'react-dom/client';
/*
si on oublie le provide ron aura cette erreur en console : 
@react-refresh:278 Uncaught Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>
*/
import { Provider } from 'react-redux';
import store from './store/store';

import App from './components/App/App';

import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
