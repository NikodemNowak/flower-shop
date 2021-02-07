import {applyMiddleware, createStore, Store} from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

// Connect chrome dev tools extension for debugging
const store: Store = createStoreWithMiddleware(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export type AppState = ReturnType<typeof rootReducer>
export default store;