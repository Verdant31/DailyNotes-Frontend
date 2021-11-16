//React Router
import { Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import './styles/Global.scss';

function App() {
  return (
    <BrowserRouter>
      <Route path="/">
        <Home />
      </Route>
    </BrowserRouter>

  );
}
export default App;
