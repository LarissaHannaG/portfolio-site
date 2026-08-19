import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
