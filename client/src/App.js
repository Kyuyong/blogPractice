import "./app.scss";
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<Main />}/>
        <Route path = "/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;
