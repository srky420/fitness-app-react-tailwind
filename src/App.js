import { Outlet } from 'react-router-dom';
import './App.css';
import { Footer } from './components/globals/Footer';
import { Navbar } from './components/globals/Navbar';
import { Newsletter } from './components/globals/Newsletter';


// Define component
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
