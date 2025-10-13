// App.jsx
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import AboutPage from './pages/AboutPage'
import DonationPage from './pages/DonationPage'
// Add this import
import ScubaPage from './pages/ScubaPage';
import './App.css'
import NotFound from './pages/NotFound'
// Add this import
import ProgrammingPage from './pages/ProgrammingPage';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/donate" element={<DonationPage />} />
 <Route path="/programming" element={<ProgrammingPage />} />
<Route path="/scuba" element={<ScubaPage />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
      </main>
    </div>
  )
}

export default App