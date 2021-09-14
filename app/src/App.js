import logo from './logo.svg';
import './App.css';
import Button from './Comcsss/Button';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Compontets/Header';
import PageL from './Compontets/PageL';
import PageDetails from './Compontets/PageDetails';
import Comments from './Compontets/Comments';
function App() {
  return (
    <div className="App bg-gray-100 mb-3">
      <Router>

        <Header />
        {/* <Comments /> */}
        <Switch>
          <Route path="/" exact component={PageL} />
          <Route path="/posts/:productId" component={PageDetails} />
          {/* <Route path="/comments/" component={Comments} /> */}

          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
