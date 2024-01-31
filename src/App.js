import './App.css';
import { Footer } from './components/globals/Footer';
import { Navbar } from './components/globals/Navbar';
import { Newsletter } from './components/globals/Newsletter';
import { GridDisplay } from './components/landingPage/GridDisplay';
import { Hero } from './components/landingPage/Hero';
import { NewPrograms } from './components/landingPage/NewPrograms';
import { Pricing } from './components/landingPage/Pricing';
import { Testimonials } from './components/landingPage/Testimonials';
import { TimeTable } from './components/landingPage/TimeTable';
import { TopTrainers } from './components/landingPage/TopTrainers';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NewPrograms />
      <GridDisplay />
      <TimeTable />
      <TopTrainers />
      <Pricing />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
