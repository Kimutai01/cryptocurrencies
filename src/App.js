import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Popular from './components/Popular';
import PopularDetail from './components/PopularDetail';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Popular />} />
          <Route path="/popularDetail/:id" element={<PopularDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
