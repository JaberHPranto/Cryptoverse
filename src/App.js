import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  Homepage,
  Navbar,
  News,
} from "./components";
function App() {
  return (
    <div className="app">
      <div className="navbar"></div>
      <Navbar />
      <div className="main"></div>
      <Layout>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer"></div>
    </div>
  );
}

export default App;
