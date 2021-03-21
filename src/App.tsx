import {Provider} from "react-redux";
import './App.css';
import store from "./store/store";
import AppContainer from "./AppContainer";

const App = () => {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}

export default App;
