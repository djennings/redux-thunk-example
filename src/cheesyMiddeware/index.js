const customMiddleWare = store => next => action => {
  if (action.type === 'INCREMENT') {
    console.log(
      `Cheesy Middleware alert!\nIncrement button was clicked or dispatched via an action, current counter state is ${
        store.getState().counter
      }\nI will now add to it`
    );
  } else if (action.type === 'LOADING') {
    console.log(
      `Cheesy Middleware alert!\nIncrement async button was clicked, current counter state is ${
        store.getState().counter
      }\nI will add to it in 1 second`
    );
  } else {
    console.log(
      `Cheesy Middleware alert!\nDecrement button was clicked, current counter state is ${
        store.getState().counter
      }\nI will now subtract from it`
    );
  }
  next(action);
};

export default customMiddleWare;
