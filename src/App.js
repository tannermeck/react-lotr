import './App.css';
import Main from './views/Main/Main';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Films from './views/Films/Films';
import Character from './views/Characters/Character';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route>
            <Character />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
