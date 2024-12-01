import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import About from './pages/About';
import Navbar from './components/Navbar';
import Nome from './pages/Nome';
import { ThemeProvider, useTheme } from './context/TemaContext.js'; 
import { useEffect } from 'react';
import { ThemeToggleButton } from './components/ChangeTema.js'; 

function App() {
  return (
    <ThemeProvider>  
      <AppContent />
    </ThemeProvider>
  );
}

const AppContent = () => {
  const { isDarkMode } = useTheme(); 
  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <h1>React Context</h1>
      <ThemeToggleButton />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/about' element={<About />} />
          <Route path='/nome' element={<Nome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
