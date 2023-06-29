
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';

import './App.css';
import Home from './pages/Home';
import ExpenseTracker from './pages/ExpenseTracker';
import MovieWebsite from './pages/MovieWebsite';
import TodoApp from './pages/TodoApp';
import FakeStore from './pages/FakeStore';




function App() {

  return <BrowserRouter>
 <a href="/" className='btn btn-primary m-3'>Home</a>
 <a href="/" className='btn btn-primary m-3'>Todo App</a>
 <a href="/" className='btn btn-primary m-3'>Expense Tracker</a>
 <a href="/" className='btn btn-primary m-3'>Fake Store</a>
 <a href="/" className='btn btn-primary m-3'>Movie Website</a>
 
 
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
