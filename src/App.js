import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/header/header';
import NotFound from './pages/NotFound';
import Footer from './components/footer/footer';
import Culture from './pages/Сulture';
import Catalog from './pages/Catalog';
import Attractions from './pages/Attractions';
import Admin from './pages/admin';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/culture' element={<Culture />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/attractions' element={<Attractions />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
