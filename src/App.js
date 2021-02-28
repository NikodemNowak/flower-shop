import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import './App.css';
import store from "./store/store";
import FlowerView from "./FlowerView";
import ClientView from "./ClientView";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {Snackbar} from "@material-ui/core";
import SnackbarHandler from "./SnackbarHandler";

function App() {
    return (
        <Provider store={store}>
            <div>
                <SnackbarHandler/>
                <Router>
                    <Route>
                        <Switch>
                            <Route path="/flowers" component={FlowerView}/>
                            <Route path="/clients" component={ClientView}/>
                        </Switch>
                    </Route>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
