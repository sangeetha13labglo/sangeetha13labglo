
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";


import Details from './details';
import Reference from './Reference';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Details />} />
        <Route exact path="/reference/:id" element={<Reference />} />
      </Routes>
    </Router>
  );
}

export default App;
