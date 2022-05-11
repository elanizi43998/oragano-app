import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { GlobalStyle } from './components/Global';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Index/Login';
function App() {
  return (
    <>
      {' '}
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
