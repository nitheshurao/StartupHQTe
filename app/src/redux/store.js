import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(
    reducers,
    {},    //state
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //react dev tool extion
);

export default store;