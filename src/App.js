import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import './App.css';
import store from "./store/store";
import FlowerView from "./FlowerView";
import ClientView from "./ClientView";
import SnackbarHandler from "./SnackbarHandler";
import DialogHandler from "./DialogHandler";
import OrderView from "./store/OrderView";
import SignIn from "./LoginPage";
import Dashboard from "./Dashboard";

function App() {
    return (
        <Provider store={store}>
            <div>
                <SnackbarHandler/>
                <DialogHandler/>
                <Dashboard/>
                <Router>
                    <Route>
                        <Switch>
                            <Route path="/flowers" component={FlowerView}/>
                            <Route path="/clients" component={ClientView}/>
                            <Route path="/orders" component={OrderView}/>
                            <Route path="/login" component={SignIn}/>
                        </Switch>
                    </Route>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
