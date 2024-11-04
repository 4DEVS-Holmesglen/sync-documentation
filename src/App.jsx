// Import npm packages
import { Routes, Route } from 'react-router-dom';

// Import pages 
import Home from './pages/Home';
//import Uicompo from './pages/Uicompo';
import NotFound from './pages/NotFound';

// Import components
import Layout from './components/layout/Layout';

function App() {
  return (
    <Routes>
      {/* MAIN LAYOUT WRAPPER & ROUTED CHILDREN 
      <Route path="/uicompo" index element={<Uicompo />} />
      */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        
        {/* ERROR PAGES */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;