import './App.css';
import { Navbar } from './components/globals/Navbar';
import { Hero } from './components/landingPage/Hero';
import { NewPrograms } from './components/landingPage/NewPrograms';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <NewPrograms />
    </div>
  );
}

export default App;
