
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { AuthContext } from './contexts/Auth/AuthContext';
import { RouteApp } from './Routes/Route';

function App() {
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = async () =>{
    await auth.signout();
    window.location.href = window.location.href
  }

  return (
    <div className="App">
      <header>
        <h1>Header do site</h1>
        <nav>
        <Link to='/'>Home</Link>
        <Link to='/private'>Privada</Link>
        {auth.user && <button onClick={handleLogout}>Sair</button>}
      </nav>
      </header>
      <hr/>

    <main>
    <RouteApp/> 
    </main>
   
    
    </div>
  );
}

export default App;
