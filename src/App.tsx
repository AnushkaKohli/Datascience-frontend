import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseCurriculum from './components/CourseCurriculum'
import Refund from './components/Refund'
import TopCompanies from './components/TopCompanies'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <CourseCurriculum />
      <Refund />
      <TopCompanies />
    </div>
  )
}

export default App