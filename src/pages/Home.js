export default function Home(){

    return<>
   <h1 className='text-center m-5'>REACT PROJECT</h1>
  <div className="projects d-flex flex-column align-items-center">
    <Link to="/todo-app" className='project'>Todo App</Link>
    <Link to="/expense-tracker" className='project'>Expense Tracker</Link>
    <Link to="/fake-store" className='project'>Fake Store (API)</Link>
    <Link to="/movie-website" className='project'>Movie Website (API)</Link>
  </div>

    </>
    
    }










    