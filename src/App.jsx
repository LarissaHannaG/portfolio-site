import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import AccentSwitcher from './components/AccentSwitcher'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AccentSwitcher />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
