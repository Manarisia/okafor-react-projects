import { useState } from "react"
import Swal from "sweetalert2";

export default function ExpenseTracker() {
    // 1. Create useStates to store the task to be added and the array of tasks.
    const [newItem, setNewItem] = useState();
    const [price, setPrice] = useState();
    const [items, setItems] = useState([]);


    // 4. Write a function to handle the button click event.
    const addTaskHandler = () => {
        //Check if the input is empty (i.e if there is a new item)
        if (!newItem || !price) {
            Swal.fire("Please enter a task");
            return;
        }
        //    5. Add each task to the array of tasks after the button is clicked.  
        setItems([...items, { id: Date.now(), newItem, price : Number(price) }]);
    //Empty the values for the item and the price input
    setNewItem("")
    setPrice("")

    }


    function deleteItemHandler(id) {
        //Filter and retain all the items that do not have the parameter id
     setItems(items.filter(x => x.id !== id ));
     Swal.fire("Expense deleted");
    }



    return <>
        <h1 className="text-center text-uppercase">Expense Tracker</h1>
        <div className="expense tracker-header d-flex flex-wrap  justify-content-around m-3 p-3 rounded border border-primary">
            {/* 2. Add an onChange event to the input. */}
            <input value={newItem} onChange={e => setNewItem(e.target.value)} placeholder="Enter Expense Description" type="text" className="fs-5 p-3  rounded  me-5" />
            <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Enter Expense Price(₦)" type="number" className="fs-5 p-3  rounded  me-5" />
            {/* 3. Add an onClick to the button. */}
            <button onClick={addTaskHandler} className="btn btn-primary p-3 fs-5  ">Add Expense</button>
        </div>

 <h1 className="text-center text-primary m-5">Total : {items.reduce( (a, c) =>  a + c.price, 0 )}</h1>

        <div className="tasks">
            {/* 6. Map through the tasks and display them on the browser. */}
            {
                items.map(x => {
                    return <div key={x.id} className="bg-light text-primary border border-primary fs-5 d-flex justify-content-between  m-3 p-3 rounded ">
                        {x.newItem} 
                       <span>{x.price && x.price.toLocaleString ()}</span> 
                        {/* 7. Add the deleteItemHandler to the trash button  */}
                        <i onClick={() => deleteItemHandler(x.id)} style={{ cursor: "pointer" }} className="fa fa-trash text-danger "></i>
                    </div>
                })
            }




        </div>
    </>
}