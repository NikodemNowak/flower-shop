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
import HomeBar from "./HomeBar";
import FlowersAlbum from "./FlowersAlbum";
import HomePage from "./HomePage";
import UserPanel from "./UserPanel";
import {ProtectedRoute, PublicRoute} from "./Authenticaion";


function App() {
    return (
        <Provider store={store}>
            <div>
                <SnackbarHandler/>
                <DialogHandler/>
                <HomeBar/>
                <Router>
                    <Route>
                        <Switch>
                            <ProtectedRoute path="/flowers" component={FlowerView}/>
                            <ProtectedRoute path="/clients" component={ClientView}/>
                            <ProtectedRoute path="/orders" component={OrderView}/>
                            <PublicRoute path="/login" component={SignIn}/>
                            <ProtectedRoute path="/flowerTemplate" component={FlowersAlbum}/>
                            <ProtectedRoute path="/userPanel" component={UserPanel}/>
                            <PublicRoute path="/" component={HomePage}/>
                        </Switch>
                    </Route>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
