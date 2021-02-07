import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from "react-redux";
import './App.css';
import store from "./store/store";
import FlowerView from "./FlowerView";

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Route>
            <Switch>
              <Route path="/flowers" component={FlowerView} />
            </Switch>
          </Route>
        </Router>
      </Provider>
  );
}

export default App;
