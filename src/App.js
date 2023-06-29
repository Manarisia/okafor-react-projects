
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import Home from './pages/Home';
import ExpenseTracker from './pages/ExpenseTracker';
import MovieWebsite from './pages/MovieWebsite';
import TodoApp from './pages/TodoApp';
import FakeStore from './pages/FakeStore';




function App() {

  return <BrowserRouter>
 <Link to="/" className='btn btn-primary m-3'>Home</Link>
 <Link to="/todo-app" className='btn btn-primary m-3'>Todo App</Link>
 <Link to="/expense-tracker" className='btn btn-primary m-3'>Expense Tracker</Link>
 <Link to="/fake-store" className='btn btn-primary m-3'>Fake Store</Link>
 <Link to="/movie-website" className='btn btn-primary m-3'>Movie Website</Link>
 
 
  <Routes>

  <Route path="/" element={ <Home></Home>}     />
  <Route path="/todo-app" element={ <TodoApp></TodoApp>}     />
  <Route path="/expense-tracker" element={ <ExpenseTracker></ExpenseTracker>} />
  <Route path="/fake-store" element={ <FakeStore></FakeStore>}     />
  <Route path="/movie-website" element={ <MovieWebsite></MovieWebsite>}     />
  
  

  </Routes>
  <h1 className='bg-dark mt-5'></h1>
  </BrowserRouter>

}

export default App;
