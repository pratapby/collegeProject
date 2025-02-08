
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Testimonials } from './pages/Testimonials';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import Signup from './pages/signup'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;