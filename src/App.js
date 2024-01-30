import './App.css';
import { Navbar } from './components/globals/Navbar';
import { GridDisplay } from './components/landingPage/GridDisplay';
import { Hero } from './components/landingPage/Hero';
import { NewPrograms } from './components/landingPage/NewPrograms';
import { TimeTable } from './components/landingPage/TimeTable';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NewPrograms />
      <GridDisplay />
      <TimeTable />
    </div>
  );
}

export default App;
