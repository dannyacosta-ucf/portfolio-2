const initialState = {
    scores: [],
  };
  
  function reducer(state, action) {
    switch (action.type) {
      case "addNewScore":
        return { scores: [...state.scores, action.newScore] };
      default:
        throw new Error();
    }
  }
  
  export { initialState, reducer };