import {Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
import Homepage from "./pages/home/HomePage";
import RegisterPage from "./pages/register/RegisterPage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import LoginPage from './pages/login/LoginPage';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path='/' element={<Homepage />} />
        <Route path='/blog/:id' element={<ArticleDetailPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
