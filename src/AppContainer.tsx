import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import './App.css';
import {AppState} from "./store/store";
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
import {ThemeProvider} from "styled-components";
import {GlobalStyles} from "./globalStyles";
import {darkTheme, lightTheme} from "./Themes";

const AppContainer = () => {
    const {darkMode} = useSelector((state: AppState) => state.userPreferences);
    const isDarkMode = () => {
        const mode = localStorage.getItem("darkMode")
        if (mode != null) {
            return JSON.parse(mode) === true
        } else{
            return darkMode
        }
    }

    return (
        <ThemeProvider theme={!isDarkMode() ? lightTheme : darkTheme}>
            <>
                <GlobalStyles/>
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
            </>
        </ThemeProvider>
    );
}

export default AppContainer;
