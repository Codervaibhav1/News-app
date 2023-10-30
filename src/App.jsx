import React from 'react'
import Navbar from './components/Navbar'
import Pagebar from './components/Pagebar'
import { NewsProvider } from './context/news/NewsContext'
import CardData from './components/CardData'
import { WeatherProvider } from './context/Weather/WeatherContext'
import { HealthProvider } from './context/Health/HealthContext'
import { ScienceProvider } from './context/science/ScienceContext'
import ScienceCard from './components/ScienceCard'
// import ScienceTech from './components/ScienceTech'


const App = () => {
  return (
    <NewsProvider>
      <Navbar/>
      <Pagebar/>
      <WeatherProvider>
        <HealthProvider>
          
      <div className='container w-100'>
      <ScienceProvider>
      <CardData/>
      </ScienceProvider>
      </div>
      </HealthProvider>
      </WeatherProvider>
    </NewsProvider>
  )
}

export default App