import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseCurriculum from './components/CourseCurriculum'
import Refund from './components/Refund'
import TopCompanies from './components/TopCompanies'
import Unlock from './components/Unlock'

function App() {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <CourseCurriculum />
      <Refund />
      <TopCompanies />
      <Unlock />
    </div>
  )
}

export default App