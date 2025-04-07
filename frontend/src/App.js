import Footr from './Components/Footr';
import Navigation from './Components/Navigation';
import Student from './Components/Student';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import ListStudent from './Components/ListStudent';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Navigate to="/student" />} />
        <Route path='student' element={<Student/>}/>
        <Route path='liststudents' element={<ListStudent/>}/>
      </Routes>
      <Footr/>
      </Router>
    </div>
  );
}
export default App;
