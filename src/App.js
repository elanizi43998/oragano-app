import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { GlobalStyle } from './components/Global';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
function App() {
  return (
    <>
      {' '}
      <GlobalStyle />
      <Router>
        <Header />
        <Routes >
          <Route path='/' element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
