import './styles/Global.scss';

//React Router
import { Route, BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
export default App;


