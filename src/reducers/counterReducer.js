// Define the initial state for the counter
const initialState = {
  count: 0,
};

// Define the counter reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle the "INCREMENT" action
    case "INCREMENT":
      // Return a new state with the count incremented by 1
      return {
        count: state.count + 1,
      };
    // Handle the "DECREMENT" action
    case "DECREMENT":
      // Return a new state with the count decremented by 1
      return {
        count: state.count - 1,
      };
    // Handle the default case (no action type matches)
    default:
      // Return the current state as is
      return state;
  }
};

// Export the counter reducer function
export default counterReducer;
