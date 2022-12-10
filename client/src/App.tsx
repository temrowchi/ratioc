import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Chat from './pages/Chat';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" index element={<Login />} />
        <Route path="/chat" index element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
