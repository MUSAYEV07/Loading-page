import About from './components/About/About'
import Camanda from './components/Camanda/Camanda'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Statistic from './components/Statistics/Statistic'

function Layout() {
  return (
    <div>
      <Header />
      <Hero/>
      <Statistic />
      <About/>
      <Camanda/>
    </div>
  )
}

export default Layout