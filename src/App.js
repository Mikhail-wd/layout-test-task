import {NavLink, Routes, Route} from 'react-router-dom';
import {TaskOne} from './pages/TaskOne.js';
import {TaskOneTwo} from './pages/TaskOneTwo.js';
import {TaskTwo} from './pages/TaskTwo.js';
import {TaskTwoTwo} from './pages/TaskTwoTwo.js';
import './App.css';

function App() {
  return (
    <div className="content-task">
      <div className='nav_bar'>
        <NavLink className="links" to="/task_One"> Task № 1.1 </NavLink>
        <NavLink className="links" to="/task_OneTwo"> Task № 1.2 </NavLink>
        <NavLink className="links" to="/task_Two"> Task № 2.1 </NavLink>
        <NavLink className="links" to="/task_TwoTwo"> Task № 2.2 </NavLink>
      </div>
      <Routes>
        <Route path="/task_One" element={<TaskOne/>}></Route>
        <Route path="/task_OneTwo" element={<TaskOneTwo/>}></Route>
        <Route path="/task_Two" element={<TaskTwo/>}></Route>
        <Route path="/task_TwoTwo" element={<TaskTwoTwo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
