import { useState} from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  
  const [sidebarOpen, setSidebarOpen ] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);    
  }

  return (
    <div className="container">
      <Sidebar sidebar={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
}

export default App;
