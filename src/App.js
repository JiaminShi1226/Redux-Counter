import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterActions";

function App() {
  // Access the 'count' state from the Redux store using 'useSelector'
  const count = useSelector((state) => state.count);

  // Retrieve the dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Event handler for the 'Increment' button
  const handleIncrement = () => {
    // Dispatch the 'increment' action
    dispatch(increment());
  };

  // Event handler for the 'Decrement' button
  const handleDecrement = () => {
    // Dispatch the 'decrement' action
    dispatch(decrement());
  };

  return (
    <div>
      {/* Display the current count */}
      <h1>Counter: {count}</h1>
      {/* Button to increment the counter */}
      <button onClick={handleIncrement}>Increment</button>
      {/* Button to decrement the counter */}
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
