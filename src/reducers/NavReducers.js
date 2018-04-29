import RootStack from '.././RootStack.js';

const NavReducers = (state, action) => {
  const newState = RootStack.router.getStateForAction(action, state)
  return newState || state
}

export default NavReducers;